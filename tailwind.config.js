/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
            900: '#0f172a', // Slate 900
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
