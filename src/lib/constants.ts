export type ExternalLink = {
  label: string;
  href: string;
  note?: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  href?: string;
};

export type WorkHistoryItem = {
  period: string;
  title: string;
  summary: string;
  details: string[];
};

export type WorkingPrinciple = {
  title: string;
  items: string[];
};

export const siteMeta = {
  title: "satococoa.dev",
  description:
    "Satoshi Ebisawa の個人ポータル。業務経歴、関わってきたプロダクト、外部媒体の最新記事をまとめています。",
  googleAnalyticsId: "G-063LZ5YTLV",
};

export const profile = {
  name: "Satoshi Ebisawa",
  handle: "@satococoa",
  role: "Full-stack software developer building products",
  company: "ROUTE06",
  location: "Tokyo, Japan",
  intro:
    "Web プロダクトの開発、改善、運営を横断してきたソフトウェア開発者です。Rails、iOS、Next.js などを使いながら、プロダクトづくりの現場で必要なことを広く扱ってきました。",
  summary:
    "最近は AI を前提にしたプロダクト開発や開発フローにも強い関心があります。",
};

export const capabilities = [
  "Web frontend (React, Next.js)",
  "Backend (Ruby on Rails, Go, TypeScript)",
  "iOS app development",
  "Product development and technical leadership",
  "LLM application / RAG / AI workflow design",
];

export const externalLinks: ExternalLink[] = [
  { label: "GitHub", href: "https://github.com/satococoa" },
  { label: "X", href: "https://x.com/satococoa" },
  { label: "Zenn", href: "https://zenn.dev/satococoa", note: "技術記事" },
  { label: "dev.to", href: "https://dev.to/satococoa", note: "英語の技術記事" },
  { label: "note", href: "https://note.com/satococoa", note: "技術以外の記事" },
  { label: "Hatena Blog", href: "https://satococoa.hatenablog.com", note: "過去記事" },
];

export const navigation = [
  { label: "トップ", href: "/" },
  { label: "仕事", href: "/work" },
  { label: "仕事の進め方", href: "/how-i-work" },
  { label: "プロダクト", href: "/products" },
  { label: "アーカイブ", href: "/archive" },
];

export const workHighlights = [
  "独学でプログラミングを始め、PG / SE、toC Web サービス、iOS アプリ、エンジニアリングマネジメント、AI プロダクト開発へと担当領域を広げてきました。",
  "サーバサイド、フロントエンド、インフラをまたいで、実装だけでなく技術選定、運用改善、開発フロー整備まで扱うことが多いです。",
  "0→1 の立ち上げ、成長フェーズのプロダクト改善、チームで仕事を前に進めるための仕組みづくりに継続して取り組んできました。",
  "最近は AI-native なプロダクト開発、RAG や LLM 基盤、開発者の生産性を高めるワークフローに特に関心があります。",
];

export const workTimeline = [
  {
    period: "Career",
    title: "Rails、iOS、Web プロダクト開発",
    description:
      "独学からキャリアを始め、PG / SE を経て、イグニスグループでは with や INSPIX LIVE などの toC プロダクト開発に深く関わりました。",
  },
  {
    period: "2021 -",
    title: "ROUTE06 でのプロダクト開発とマネジメント",
    description:
      "2021 年に ROUTE06 へ参加。6 ヶ月の育休を経て復職し、CHOOSEBASE SHIBUYA の開発やエンジニアリングマネジメントに関わってきました。",
  },
  {
    period: "Now",
    title: "AI プロダクトと開発フロー",
    description:
      "Acsim の開発に関わりながら、これまで取り組んできた Giselle も含めて、AI を前提にしたプロダクト開発、RAG、LLM infrastructure、agentic coding を実践してきました。",
  },
];

export const workHistory: WorkHistoryItem[] = [
  {
    period: "2025 -",
    title: "Giselle / Acsim",
    summary:
      "AI を前提にしたプロダクト開発、RAG、LLM infrastructure、開発フロー改善に、実装と発信の両面から関わってきました。",
    details: [
      "Giselle では AI App Builder の開発に関わり、GitHub RAG や GitHub Vector Store などのテーマでも発信してきました。",
      "Acsim では AI 基盤やアプリケーション開発に関わりながら、LLM キュー、Bedrock、並行処理設計などの実践も言語化しています。",
    ],
  },
  {
    period: "2021 -",
    title: "ROUTE06",
    summary:
      "2021 年に参加し、6 ヶ月の育休を経て復職。CHOOSEBASE SHIBUYA の開発やエンジニアリングマネジメントに関わってきました。",
    details: [
      "Web プロダクトの開発と改善に加え、チームづくりや技術的な意思決定も担当。",
      "育休取得と復職を経験しながら、持続可能に働けるチームのあり方にも関心を持っています。",
    ],
  },
  {
    period: "2011 - 2021",
    title: "イグニスグループ",
    summary:
      "with や INSPIX LIVE などの toC プロダクトに深く関わり、Rails、iOS、Web サービス開発の経験を積みました。",
    details: [
      "toC サービスの開発運営を通じて、プロダクト開発の基礎体力を身につけました。",
      "現在の INSPIX WORLD につながる前身プロダクト INSPIX LIVE の立ち上げと運営にも深く関わりました。",
    ],
  },
  {
    period: "Before 2011",
    title: "独学からキャリアのスタートへ",
    summary:
      "別職種から独学でプログラミングを学び、PC スクール講師や PG / SE を経てソフトウェア開発の仕事へ入りました。",
    details: [
      "キャリアの出発点から実務に必要なことを自分で学び続けてきたことが、今の幅広い対応力につながっています。",
    ],
  },
];

export const workSummary = [
  "フルスタックに広く手を動かせること",
  "プロダクトとチームを前に進めるための技術判断ができること",
  "AI 時代の開発フローや働き方を自分で試し、言語化できること",
];

export const workingPrinciples: WorkingPrinciple[] = [
  {
    title: "チームで前に進める",
    items: [
      "非同期でも仕事が進むように、判断の背景や経緯をできるだけ文章に残します。",
      "レビューや相談を後回しにせず、チーム全体の流れが止まらない状態を重視します。",
      "人ではなく課題に向かうこと、配慮はしつつ遠慮しすぎないことを大事にしています。",
    ],
  },
  {
    title: "AI を現実的に使う",
    items: [
      "AI は魔法ではなく、試作、調査、整理、実装の速度を上げるための実用的な道具として使います。",
      "雑務や叩き台づくりは積極的に AI に任せつつ、最終判断や設計の責任は人間が持つ前提で運用します。",
      "自分だけが速くなるのではなく、チーム全体で再利用できる進め方に落とすことを意識しています。",
    ],
  },
  {
    title: "持続可能に働く",
    items: [
      "短期的な頑張りよりも、健康に長く続けられるやり方で成果を出すことを優先します。",
      "育休取得や生活の変化も含めて、仕事と生活の両立を前提にしたキャリアを大事にしています。",
    ],
  },
];

export const featuredTopics = [
  "AI を前提にした最近の仕事の進め方",
  "開発に効く Codex やエージェントの使い方",
  "RAG、LLM 基盤、開発者向けプロダクトづくり",
];

export const projectGroups: { title: string; items: ProjectItem[] }[] = [
  {
    title: "Work products",
    items: [
      {
        title: "Giselle",
        category: "AI workflow / product",
        description:
          "これまで開発に関わってきた AI App Builder。GitHub RAG や GitHub Vector Store などのテーマでも発信してきました。",
        href: "https://giselles.ai/author/satoshi-ebisawa",
      },
      {
        title: "Acsim",
        category: "LLM infrastructure / AI product",
        description:
          "いま開発に関わっている AI プロダクト。LLM キューや Bedrock を前提にした並行処理設計など、実装に近いテーマも発信しています。",
        href: "https://ai.acsim.app/authors/satoshi-ebisawa",
      },
      {
        title: "CHOOSEBASE SHIBUYA",
        category: "Commerce platform",
        description:
          "ROUTE06 で関わってきたプロジェクトの一つ。プロダクト開発とチームづくりの両面で経験を積んできました。",
        href: "https://choosebase.jp/",
      },
      {
        title: "with",
        category: "toC product",
        description:
          "イグニスグループ時代に関わった主要プロジェクトの一つ。toC サービス開発の経験を積んだ代表的なプロダクトです。",
        href: "https://with.is/",
      },
      {
        title: "INSPIX LIVE",
        category: "Live / XR product",
        description:
          "現在の INSPIX WORLD につながる前身プロダクト。開発と運営に深く関わり、0→1 の立ち上げを経験しました。",
        href: "https://www.inspix-world.com/",
      },
    ],
  },
  {
    title: "OSS / personal tools",
    items: [
      {
        title: "wtp",
        category: "CLI / developer tooling",
        description:
          "git worktree を便利に使うための CLI ツール。開発フローを軽くするための実験として作っています。",
        href: "https://github.com/satococoa/wtp",
      },
      {
        title: "git-worktreeinclude",
        category: "Git / workflow tooling",
        description:
          "git worktree の運用を助ける OSS。実務の中で必要になった小さな道具を形にしています。",
        href: "https://github.com/satococoa/git-worktreeinclude",
      },
    ],
  },
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
