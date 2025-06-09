// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

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
});
