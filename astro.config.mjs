// @ts-check

const isDev = process.env.NODE_ENV === "development";

import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";
import icons from "./src/data/icons.json";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

const isLocal = true;
// Requrements for keystatic
import keystatic from "@keystatic/astro";


// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    include: icons,
  }), alpinejs(), // uses the integration conditionally
  ...(isDev ? [keystatic()] : [])],

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Quicksand",
        cssVariable: "--font-quicksand",
      },
    ],
  },

  // adapter: cloudflare(),
});
