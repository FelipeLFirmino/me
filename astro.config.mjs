import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://FelipelFirmino.github.io",
  base: "/me",
  integrations: [mdx(), sitemap(), tailwind()],
});
