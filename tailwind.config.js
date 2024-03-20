// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#0061E0',
        'secondary-color': '#0D263B',
        'slate-gray': '#7C8893'
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif']
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      }
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}