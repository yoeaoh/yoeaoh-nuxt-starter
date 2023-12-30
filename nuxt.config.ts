import { defineNuxtConfig } from "nuxt/config";
import { resolvePath } from "@nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default async () =>
    defineNuxtConfig({
        eslint: {
            lintOnStart: false,
        },
        colorMode: {
            preference: "dark",
        },
        devtools: { enabled: true },
        alias: {
            "~/": await resolvePath("./src/"),
        },
        srcDir: "src/",
        modules: [
            "@nuxt/devtools",
            "@nuxtjs/eslint-module",
            "@pinia/nuxt",
            "@nuxt/ui",
        ],

        appConfig: {},
    });
