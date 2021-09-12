---
title: "Hello World"
date: 2021-09-10T02:28:53+09:00
draft: true
---

# 書いてみる

とにかく何か書いてみます。

これは段落になる。テストテスト

## 見出し２

```js
function hoge() {
  console.log("hoge");
}
```

```ruby
def fuga
  puts "fuga"
end
```

## Cloudflare Pages

- clone error
  - submodule にしないと、Cloudflare Pages では動作しない
- HUGO_VERSION
  - デフォルトで実行される hugo のバージョンが古いので指定する必要あり。幸い環境変数で指定できるようになっている。
