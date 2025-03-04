import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://jeeltikiwala.github.io";  // Change this to your GitHub Pages URL
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  base: '/PortfolioNew',  // Set base path to your GitHub repository name
  integrations: [
    tailwind(),
    icon(),
    sitemap()
  ],
  output: "static",  // Change output to 'static' for GitHub Pages
  adapter: node({
    mode: "standalone",
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
