import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // NOTE: siteにはデプロイするGitHub Organizationのドメインを書く(例：https://winc1980.github.io)
  site: "",
  // NOTE: baseにはスラッシュとレポジトリ名を書く(例：/official)
  base: "",
  integrations: [
    // NOTE: 自動でサイトマップを作成してくれるプラグイン
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  build: {
    format: "preserve", // NOTE: 出力ファイルの設定
  },
});
