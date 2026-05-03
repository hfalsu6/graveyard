// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hfalsu6.github.io',
  base: '/graveyard',
  vite: {
    plugins: [tailwindcss()],
  },
});
