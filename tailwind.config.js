/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      normal: '1rem',
      md: '1.2rem',
      lg: '1.8rem',
      xl: '2.4rem',
      xxl: '3.6rem',
      xxxl: '5rem'
    },
    colors: {
      primary: "#383838",
      secondary: "#F5BD02",
      white: "#FFFFFF",
      black: '#1E1E1E',
      grey: "#888888",
      lightGrey: '#FDFEF9',
      award: '#A29AFF',
      spent: '#FF46D6',
      hired: '#FFC0CF',
      fav: '#9BFFF9',
      rating: '#FFF59E',
      error: '#DA0060',
    },
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
