// @ts-check
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentry({
      dsn: "https://f7a72e2a5eb8a2d45158781a3f87b715@o4508263619035136.ingest.us.sentry.io/4508263632011264",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    tailwind(),
    sitemap(),
    partytown(),
  ],
});