import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.BASE_SITE_URL,
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "src/data/*.json",
            dest: "data/",
          },
          {
            src: "src/assets/",
            dest: "./",
          },
        ],
      }),
      react(),
      eslint(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
  };
});
