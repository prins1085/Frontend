/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': "#ffffff",
      'black': "#000000",
      'transparent': "transparent",
      'gray': {
        // 100: '#cffafe',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        // 600: '#0891b2',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
  },
  plugins: [],
}
