---
title: "WiFiの中継機を買った"
date: 2021-07-17T01:42:30+09:00
draft: false
---

WiFi の電波が微妙に家の端っこに届かないので [バッファローの WEX-1800AX4/N](https://amzn.to/3tAZeNf) という中継機を買ってみました。
家は 70 平米くらいの 3LDK で WiFi ルーターはリビングに設置してあるのですが、リビングから一番遠い寝室の隅っこにぎりぎり電波が届かないという状況でした。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=satococoa-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08VRVCHGS&linkId=82e05dbf9fd728fb4544c2597a9c0395"></iframe>

特に色々比較したわけではなく、リビングに置いているルーターがバッファロー製の WSR-3200AX4S であったこと、Wi-Fi6 対応であったこと、コンセントに直刺しで場所を取らないこと（設置予定地が廊下なので）を理由に選びました。

↓WSR-3200AX4S

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=satococoa-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08LG6F4T4&linkId=dc47b56b8532d595e1501a625a31623e"></iframe>

---

こういうのの設定ってめんどくさいよなーと思いつつ開封したのですが、拍子抜けするくらい設置は簡単でした。
中継機をコンセントにさして WPS ボタンを長押しし、その後で親機の WPS ボタンを長押しし、1, 2 分待つだけで全て完了。

たったそれだけでもともと親機が発信していたネットワークを中継するようになり（SSID もパスワードも変わらないので端末の設定を変える必要がない）、さらに中継機自体も`Extender-A-XXXX`みたいな SSID でもネットワークを発信してくれるようになりました。

よくわからないけれども [WiFi EasyMesh](https://www.buffalo.jp/topics/utilize/detail/easymesh.html) という規格にも対応しているらしく、電波の中継やら切り替えも効率よくできてるみたいです。

結果、寝室からでも無事安定して WiFi に繋がるようになって大満足です。
こんなに設定が簡単ならもっと早く買っておけばよかった。
