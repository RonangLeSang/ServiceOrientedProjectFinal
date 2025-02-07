import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import GlobPlugin from "vite-plugin-glob";

export default defineConfig({
  plugins: [
    react(),
    GlobPlugin(),
    tailwindcss(),
    federation({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductPage": "./src/ProductPage",
        "./MyProducts": "./src/MyProducts"
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});