// @ts-check
import { defineConfig } from 'astro/config';

import sentry from '@sentry/astro';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [sentry(), tailwind(), sitemap(), partytown()]
});