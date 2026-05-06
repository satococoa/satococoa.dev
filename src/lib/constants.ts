export const siteMeta = {
  title: "satococoa.dev",
  description:
    "Satoshi Ebisawa の個人ポータル。業務経歴、関わってきたプロダクト、外部媒体の最新記事をまとめています。",
  googleAnalyticsId: "G-063LZ5YTLV",
};

export const siteOwner = {
  name: "Satoshi Ebisawa",
  role: "Full-stack software developer building products",
};

export const navigation = [
  { label: "トップ", href: "/" },
  { label: "仕事と考え方", href: "/work" },
  { label: "アーカイブ", href: "/archive" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/satococoa", icon: "lucide:github" },
  { label: "X", href: "https://x.com/satococoa", icon: "lucide:twitter" },
  { label: "Zenn", href: "https://zenn.dev/satococoa", icon: "lucide:pen-line" },
  { label: "note", href: "https://note.com/satococoa", icon: "lucide:file-text" },
];

export const feedSources = [
  {
    source: "zenn",
    url: "https://zenn.dev/satococoa/feed",
    author: "satococoa",
  },
  {
    source: "devto",
    url: "https://dev.to/feed/satococoa",
    author: "satococoa",
  },
  {
    source: "note",
    url: "https://note.com/satococoa/rss",
    author: "satococoa",
  },
] as const;
