// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";
import icons from "./src/data/icons.json";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// Requrements for keystatic
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [icon({
        include: icons
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
