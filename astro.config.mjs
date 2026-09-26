// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: ['code', 'briefcase', 'mail', 'graduation-cap', 'house', 'sun', 'moon'],
        devicon: [],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});