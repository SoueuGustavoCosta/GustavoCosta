import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // caminhos relativos: funciona em https://soueugustavocosta.github.io/GustavoCosta/
  base: "./",
  // "assets/" já é usada pelas imagens, vídeos e CV em public/
  build: { assetsDir: "static" },
});
