import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";
import { viteStaticCopy } from "vite-plugin-static-copy";
import pluginYaml from "vite-plugin-yaml2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.BASE_SITE_URL,
    plugins: [
      react(),
      eslint(),
      pluginYaml(),
      viteStaticCopy({
        targets: [
          {
            src: "src/assets/",
            dest: "./",
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
  };
});
