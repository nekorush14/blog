---
layout: post
title: GitHub PagesでPortfolioを公開してみた
excerpt: 自分のPortfolioを作ったことがなかったので，作ってみました.
tags: 
  - Portfolio
  - GitHub Pages
---

### TL;DR

<ul class="browser-default">
  <li>自分のPortfolioを作ったことがなかったので，作ってみました</li>
  <li>公開はバージョン管理等のメンテナンスが簡単なGitHub Pagesを使用</li>
  <li><a href="https://danboruya.github.io">出来上がったもの</a></li>
</ul>

### 使用した技術

Portfolio自体のバージョン管理が楽にできて，なおかつ公開も楽にできる[GitHub Pages](https://pages.github.com/)を選びました．
GitHub Pagesは静的ページのみという制約がありますが，GitHub側でホスティングしてもらえるので，
常設サーバーを別途用意する必要ないのが特徴です．また，Javascriptは動作するようなので，
JSファイルと自分で作って公開したサイト上で動作させることも可能です． 

Portfolioのテーマとして[Materialize](https://materializecss.com/)を使用しました．
これまで大学院講義等で作成したWeb applicationはMaterializeを使っており，
使い慣れているという点，単純にMaterial themeが好きという点から選びました．
([Material Compornent for Web](https://material.io/develop/web/)を使ってみたかったけど複雑だったのでまたの機会に...)

### 実装方法

1. GitHub上で `自分のGitHubアカウント名.github.io` という名前でRepositoryを作成
2. ローカル上でPortfolioを構成するHtmlを作成
3. 以下のコマンドでGitHub上にPush

    ```shell
    cd /path/to/portfolio/page/
    git init
    git add .
    git commit
    git remote add origin git@github.com:USERNAME/REPOSITORY_NAME.git
    git push -u origin master
    ```

4. Push後GitHub Pagesにデプロイされるまで待つ

この手順でGitHub PagesによるWebページが作られます．

### 出来上がったもの

Portfolioのページは以下のようになりました．  
<div class="row">
  <div class="col s12">
    <div class="card">
      <div class="card-image">
        <img class="materialboxed" src="https://drive.google.com/uc?export=view&id=12mfvc6HeqJDS90_Te3d2kMboKJT8cS9_">
      </div>
    </div>
  </div>
</div>

#### 余談

今まで"作ろう作ろうと思って"とか，"作っては消し作っては消し"状態だった[ユーザーページのRepository](https://github.com/Danboruya/danboruya.github.io)も，
ようやく落ち着きPortfolioを割り当てることにしました．今回はガリガリHTMLにMaterializeの属性付きタグを書いていきましたが，
[Jekyll](https://jekyllrb.com/)のテーマを使うと簡単にできるらしい(自分好みのデザインがあるかは別)．
と言いつつこのBlogはJekyllを静的サイトジェネレーターとして使ってるので，どのように実装したかを書けるといいかな?

### Reference

<ul class="browser-default">
  <li><a href="https://jekyllrb.com/">Jekyll • Simple, blog-aware, static sites | Transform your plain text into static websites and blogs</a></li>
  <li><a href="https://github.com/mnishiguchi/mnishiguchi.com">mnishiguchi/mnishiguchi.com: Masatoshi Nishiguchi's blog.</a></li>
</ul>