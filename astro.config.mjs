// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { icons } from './src/data/icons.json';
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon({
            include: {
                // Include only required stash icons in the bundle
                "material-symbols": icons,
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
