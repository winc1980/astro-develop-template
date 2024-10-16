# Astro.js開発テンプレート
* このレポジトリの使い方
* 構成
* 概要

このレポジトリはWebチームが主に案件のWebサイト制作をするために作られました。

## 構成
```
public
├── assets
src
├── components
│   ├── Footer.astro
│   └── Header.astro
├── env.d.ts
├── layouts
│   └── Layout.astro
├── pages
│   └── index.astro
├── scss
│   ├── _variables.scss
│   └── styles.scs
astro.config.mjs
│
package.json
│
package-lock.json
│
tailwind.config.mjs
│
tsconfig.json
```
ディレクトリ構成は以上のようになっています。フレームワークはAstro.js、CSSフレームワークはTailwind CSSを使用しています。

## このレポジトリの使い方
### 新しいプロジェクト(案件開発)を始めるとき(PM向け)
1. Download ZIP![](/public/assets/capture1.png)
2. ダウンロードしたZIPファイルを解凍し、フォルダ名を任意の名前に変更する。
3. VSCodeでフォルダを開き、ターミナルで``npm install ``する
4. ダウンロードしたフォルダはGitレポジトリになっていないので、ローカルでGitレポジトリにしてリモートにpushする。リモートに作るレポジトリは案件の場合は先方のorganizationの中に作ること。以下参考資料。
   * [ローカルディレクトリをGitHubのリモートリポジトリへ新規Push](https://qiita.com/sugimount-a/items/415116b2fc7ef2bfd74d)
   * GitHubで新規organizationを作成する