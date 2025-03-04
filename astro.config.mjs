import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";
import netlify from '@astrojs/netlify';
import sitemap from "@astrojs/sitemap";

// We are doing some URL setup here to handle your local and production URLs
const SERVER_PORT = 3000;
// the url to access your portfolio during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your portfolio after deploying it (e.g. Netlify)
const LIVE_URL = "https://jeeltikiwala.github.io";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

// When you're building your site, change the base URL to your live URL
if (isBuild) {
  BASE_URL = LIVE_URL;
}

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,  // dynamic URL setup based on build or local development
  base: '/PortfolioNew', // This should be the base path you want for your deployed site
  integrations: [
    tailwind(),
    icon(),
    sitemap()  // Add sitemap integration if you need it
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
