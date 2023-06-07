import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import react from "@vitejs/plugin-react";
import imageminGifSicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngQuant from "imagemin-pngquant";
import imageminSvgGo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import path from "path";
import importYAML from "rollup-plugin-import-yaml";
import { defineConfig, loadEnv } from "vite";
import { compression } from "vite-plugin-compression2";
import eslint from "vite-plugin-eslint";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root, "");

  return {
    root,
    base: env.BASE_SITE_URL,
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            chakra: ["@chakra-ui/react", "@chakra-ui/icons"],
          },
        },
      },
    },
    plugins: [
      react(),
      eslint(),
      importYAML({
        root,
        isTS: true,
        shouldFollowReferences: true,
      }),
      viteStaticCopy({
        targets: [
          {
            src: "src/assets/",
            dest: "./",
          },
        ],
      }),
      compression({ algorithm: "brotliCompress" }),
      compression({ exclude: [/\.(br)$/i] }),
      viteImagemin({
        plugins: {
          jpg: imageminMozjpeg(),
          png: imageminPngQuant(),
          gif: imageminGifSicle(),
          svg: imageminSvgGo(),
        },
        makeWebp: {
          plugins: {
            jpg: imageminWebp(),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
  };
});
