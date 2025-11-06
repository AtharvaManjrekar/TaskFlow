/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(135deg, #6EA8FE 0%, #C79BFC 100%)',
        'page-gradient': 'linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        calistoga: ['Calistoga', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
