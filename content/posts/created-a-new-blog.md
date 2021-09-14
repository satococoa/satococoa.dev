---
title: "新しくブログを作った"
date: 2021-09-15T01:34:00+09:00
draft: false
---

[2021 年 8 月の振り返り](https://satococoa.dev/posts/202108-review/)に書いた通り、新しくブログを作ってみました。

子どもが生まれたことによって改めて新しいキャリアというか人生が始まった意識が強く、ここから再スタートという意味を込めて過去のエントリは 2021 年 6 月以降のもののみを手動で移行しています。

## 目的

- 自分の所有するドメインで公開したい
  - 書いたエントリを他社プラットフォームに預けるのではなく、自分のコンテンツとして自分で管理したかった
  - 副業や個人開発など、会社員として以外の活動をするにあたっての営業ツールとしても使いたい
- 技術以外の話も気軽に書いていきたい
  - なんとなくはてなブログだと「技術ブログを書かないとなー」という勝手な意識があった
  - ジャンルにあまりこだわらず、いわゆる雑記ブログ的にこまめに書く習慣をつけていきたい
- 文章力をつけていきたい
  - 自分のメモというよりは、人に読んでもらうことを意識したエントリを書いていきたい

## 技術的な話

### [Hugo](https://gohugo.io/)

あまり構築や管理に手間をかけたくはなかったので [Hugo](https://gohugo.io/) か [Eleventy](https://www.11ty.dev/) の 2 択で考えていました。

機能的にはどちらも個人ブログや静的サイトを作る際に僕が欲しい機能は十分に揃っていそうで、かつテンプレートのカスタマイズもどちらでもさほど難しくなさそうなので正直「どちらでもいいなー」という感じだったのですが、先に Hugo の方で気に入ったテーマ（[PaperMod](https://github.com/adityatelange/hugo-PaperMod/)）を見つけたので Hugo にしてみました。

#### テーマ設定後に行った作業

テーマ設定後に行った作業としては以下のような項目で、あとはおいおい調整する感じにしようかと思います。（特に Amazon のリンクをもっと見やすくしたい。公式のアソシエイトツールバーで生成したタグを使っているのですが、商品名が省略されてしまうなどしてイケてない）

- Google Analytics 導入
- CSS を調整し、文字サイズや行間などを調整
- 個別エントリページ下部に表示される Prev, Next リンクが直感と逆だったのでテンプレートをカスタマイズして入れ替え
- その他、とりあえず思いつく設定を config.toml に書き込む

### [Cloudflare Pages](https://pages.cloudflare.com/)

サーバは [Cloudflare Pages](https://pages.cloudflare.com/) にしてみました。
[GitHub Pages](https://pages.github.com/) や [Firebase](https://firebase.google.com/?hl=ja) でもよかったのですが、せっかくなので新しいものを使ってみたいと思ったので。

いくつかハマったことがあったので記録しておきます。

#### ビルド時のリポジトリの Clone に失敗する

`Cloning git repository` のステップにおいて `Failed: an internal error eccurred` というエラーが出てしまいました。

テーマをインストールする際に git clone していたのが原因のようで、submodule としてインストールすることで解決できました。

#### hugo コマンド実行時にエラー

以下のようなエラーが出ていました。

```
Error: "/opt/buildhome/repo/themes/PaperMod/layouts/shortcodes/collapse.html:4:1": parse failed: template: shortcodes/collapse.html:4: function "warnf" not defined
```

デフォルトで Cloudflare Pages のビルド環境にインストールされている Hugo のバージョンが古いのが原因のようで、環境変数にて `HUGO_VERSION` を設定してあげる必要がありました。

[Using a specific Hugo version](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site#using-a-specific-hugo-version)

#### www.satococoa.dev -> satococoa.dev へのリダイレクト

Cloudflare では Page Rules という機能を使うとリダイレクトの設定ができるようで、以下のように設定しておきました。

![Page Rules スクリーンショット](/images/cloudflare-page-rule.png)

#### \_domainconnect という CNAME がデフォルトで設定されていたので削除

この satococoa.dev というドメインは Google Domains で取得したものなのですが、今回 Cloudflare 上で DNS 管理するためにネームサーバを Cloudflare に向けています。

Cloudflare のネームサーバを設定する際に自動的に以下のような CNAME が設定されていました。

```
CNAME _domainconnect connect.domains.google.com
```

この `_domainconnect` というレコードは [Domain Connect](https://www.domainconnect.org/)という標準に基づくもののようです。

従来ドメインを使用する SaaS 等サービスの設定は DNS の知識がないと難しいものでしたが、この標準に準拠することにより DNS の設定を自動化してくれるものと理解しました。

今回、既に DNS の管理を Cloudflare に移してしまっているので不要と判断し、当該レコードは削除しました。
