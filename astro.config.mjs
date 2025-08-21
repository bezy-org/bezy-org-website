import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bezy.org',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
