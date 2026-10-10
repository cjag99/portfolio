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
        devicon: [
          'html5',
          'css3',
          'javascript',
          'typescript',
          'nodejs',
          'react',
          'nextjs',
          'vuejs',
          'tailwindcss',
          'bootstrap',
          'java',
          'php',
          'laravel',
          'python',
          'djangorest',
          'fastapi',
          'flask',
          'vitejs',
          'junit',
          'pytest',
          'git',
          'docker',
          'mysql',
          'postgresql',
          'supabase',
          'amazonwebservices',
          'cursor',
          'claudecode',
        ],
        'simple-icons': ['jest'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});