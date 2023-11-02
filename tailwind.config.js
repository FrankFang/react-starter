/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff6600',
        'back': '#1a1717',
        'back-2': '#120c0d',
        'success': '#00fd67',
        'danger': '#ff0000',
      },
    },
  },
  plugins: [],
}
