import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  },
  build: {
    format: "preserve" // NOTE: 出力ファイルの設定
  },
  integrations: [tailwind()],
  // Astroを実行したときにブラウザが自動でサーバーを開く
  server: {
    host: true,
    open: true,
  },
});