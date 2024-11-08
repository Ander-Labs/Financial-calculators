// @ts-check
import { defineConfig } from "astro/config";

//import sentry from "@sentry/astro";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    /* sentry({
      dsn: "https://f7a72e2a5eb8a2d45158781a3f87b715@o4508263619035136.ingest.us.sentry.io/4508263632011264",
      environment: "production",
      sourceMapsUploadOptions: {
        project: "financial-calculators",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),*/
    tailwind(),
    sitemap(),
    partytown({
      // Example: Disable debug mode.
      config: {
        debug: true,
        // forward: ["dataLayer.push"],
      },
    }),
    icon(),
  ],
});
