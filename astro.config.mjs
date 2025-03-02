import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: "static", // ✅ Required for GitHub Pages
  base: "/PortfolioNew", // ✅ Must match your GitHub repo name
  site: "https://jeeltikiwala.github.io/PortfolioNew", // ✅ Your GitHub Pages URL
  integrations: [tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
