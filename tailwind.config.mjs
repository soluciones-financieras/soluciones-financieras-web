/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-green': '#74BF04',
        'brand-green-light': '#8cc63f',
        'brand-green-dark': '#5c9b13',
        'brand-blue': '#0e4475',
        'brand-blue-dark': '#024873',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
