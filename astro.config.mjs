// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        // Include only required stash icons in the bundle
        "material-symbols": ["menu-rounded", "account-circle-outline", "shopping-cart-outline"],
        // Include all `uis` icons
        // uis: ['*']
      },
    }),
    alpinejs(),
  ],

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
