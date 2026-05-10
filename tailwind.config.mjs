/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        paper: '#f4f7fb',
        accent: '#f97316',
        berry: '#e11d48',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(23, 23, 23, 0.12)',
      },
    },
  },
  plugins: [],
};
