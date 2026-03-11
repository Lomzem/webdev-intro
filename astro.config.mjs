import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lomzem.github.io",
  base: "/webdev-intro/",
  vite: {
    plugins: [tailwindcss()],
  },
});
