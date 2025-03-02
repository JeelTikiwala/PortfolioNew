import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),  // Use the Netlify adapter for deployment
  site: 'https://jeeltikiwala.github.io',  // Your site URL (change as needed)
  base: '/PortfolioNew',  // Use a base path if your site is deployed in a subfolder
  integrations: [tailwind(), icon()],  // Add any integrations you need
  output: 'static',  // Build as a static site
  markdown: {
    remarkPlugins: [remarkReadingTime],  // Add markdown plugins as needed
  },
});
