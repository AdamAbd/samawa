/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      padding: {
        xl: '4rem',
      },
    },
    extend: {
      fontFamily: { "poppins": ["Poppins", "sans-serif"] },
    }
  },
  plugins: []
};