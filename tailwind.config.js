/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1467px',
      'xl': '1500px',
      '2xl': '1536px',
    },
    extend: { 
      fontFamily: { 
        inter: ["Inter"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}