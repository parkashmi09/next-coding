/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
        colors: {
          'primary': '#2D3958',
          'secondary': '#7C8BA1',
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
        }
      },
    },
    plugins: [],
  }