// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// Requrements for keystatic
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [icon({
        include: {
            // Include only required stash icons in the bundle
            "material-symbols": [
                "menu-rounded",
                "account-circle-outline",
                "shopping-cart-outline",
                "network-node",
                "emoji-people-rounded",
                "voice-chat-outline-rounded",
                "kid-star-outline",
                "check-box-outline-rounded",
            ],
            // Include all `uis` icons
            // uis: ['*']
        },
    }), alpinejs(), react(), markdoc(), keystatic()],

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
