/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        show: {
          'from': { transform: 'translateY(50%)', opacity: '0%' },
          'to': { transform: 'translateY(0%)', opacity: '100%' },
        },
      },
    },
  },
  plugins: [],
};
