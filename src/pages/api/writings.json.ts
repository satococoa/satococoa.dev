import type { APIRoute } from "astro";

import { getLatestWritings } from "@/lib/feeds";

export const prerender = false;

export const GET: APIRoute = async () => {
  const items = await getLatestWritings(6);

  return new Response(
    JSON.stringify({
      items,
      fetchedAt: new Date().toISOString(),
    }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
};
