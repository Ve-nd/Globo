import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8A3D',
          light: '#FFC94A',
          dark: '#E67330',
        },
        accent: {
          DEFAULT: '#E6295C',
          light: '#FF4D79',
        },
        background: '#F8F9FA',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'floating': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
} satisfies Config;
