/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1A3836',
        'secondary': '#368084',
        'third': '#8BCCBE',
        'fourth': '#F7F6F0',
        'fifth': '#F82124',
      }
    },
  },
  plugins: [],
}