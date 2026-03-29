import { XMLParser } from "fast-xml-parser";

import { feedSources } from "@/lib/constants";

export type WritingSource = (typeof feedSources)[number]["source"];

export type WritingItem = {
  title: string;
  url: string;
  source: WritingSource;
  publishedAt: string;
  author: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseTagValue: true,
  trimValues: true,
  processEntities: false,
});

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function readText(value: unknown): string {
  if (typeof value === "string") {
    return value.trim();
  }

  if (typeof value === "number") {
    return String(value);
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  const record = value as Record<string, unknown>;
  const candidates = ["#text", "__cdata", "@_href", "name"];

  for (const key of candidates) {
    const text = readText(record[key]);
    if (text) {
      return text;
    }
  }

  return "";
}

function readLink(value: unknown): string {
  if (typeof value === "string") {
    return value.trim();
  }

  for (const entry of asArray(value)) {
    if (typeof entry === "string" && entry.trim()) {
      return entry.trim();
    }

    if (entry && typeof entry === "object") {
      const record = entry as Record<string, unknown>;
      const href = readText(record["@_href"]);
      if (href) {
        return href;
      }
    }
  }

  return "";
}

function toIsoDate(value: unknown): string {
  const text = readText(value);
  const date = new Date(text);

  if (Number.isNaN(date.getTime())) {
    return new Date(0).toISOString();
  }

  return date.toISOString();
}

function parseEntries(xml: string): Array<Record<string, unknown>> {
  const parsed = parser.parse(xml) as Record<string, unknown>;
  const rssItems = asArray(
    ((parsed.rss as Record<string, unknown> | undefined)?.channel as Record<string, unknown> | undefined)?.item as
      | Record<string, unknown>
      | Record<string, unknown>[]
      | undefined,
  );

  if (rssItems.length > 0) {
    return rssItems;
  }

  const atomEntries = asArray(
    (parsed.feed as Record<string, unknown> | undefined)?.entry as
      | Record<string, unknown>
      | Record<string, unknown>[]
      | undefined,
  );

  return atomEntries;
}

async function fetchSourceFeed(source: WritingSource, url: string, author: string): Promise<WritingItem[]> {
  const response = await fetch(url, {
    headers: {
      "user-agent": "satococoa.dev feed aggregator",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${source}: ${response.status}`);
  }

  const xml = await response.text();
  const entries = parseEntries(xml);

  return entries
    .map((entry) => {
      const title = readText(entry.title);
      const entryUrl = readLink(entry.link);
      const publishedAt = toIsoDate(
        entry.pubDate ?? entry.published ?? entry.updated ?? entry.created ?? entry.date,
      );
      const entryAuthor =
        readText(entry.author) ||
        readText((entry.author as Record<string, unknown> | undefined)?.name) ||
        readText(entry["dc:creator"]) ||
        author;

      if (!title || !entryUrl) {
        return null;
      }

      return {
        title,
        url: entryUrl,
        source,
        publishedAt,
        author: entryAuthor || author,
      };
    })
    .filter((item): item is WritingItem => item !== null);
}

export async function getLatestWritings(limit = 6): Promise<WritingItem[]> {
  const results = await Promise.allSettled(
    feedSources.map((feed) => fetchSourceFeed(feed.source, feed.url, feed.author)),
  );

  const items = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));

  return items.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
}
