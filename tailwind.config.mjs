/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'brutalist': {
          'black': '#000000',
          'white': '#FFFFFF',
          'red': '#FF0000',
          'yellow': '#FFFF00',
          'blue': '#0000FF',
        }
      },
      fontSize: {
        'mega': '8rem',
        'ultra': '6rem',
        'giant': '4rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}