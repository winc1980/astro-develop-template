import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // NOTE: siteがないとエラー吐くので削除しない
  site: "https://www.pentio.com/",
  integrations: [
    // NOTE: 自動でサイトマップを作成してくれるプラグイン
    sitemap(),
  ],
  server: {
    // NOTE: npm run devなどで開発環境を立ち上げたときのポート番号 デフォルト値は4321
    port: 3000,
  },
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
