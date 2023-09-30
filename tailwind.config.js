/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'c-dark': "#1C2022",
        'c-dark-grey': '#474B4F',
        'c-light-grey': '#6B6E7C',
        'c-dark-green': '#61892F',
        'c-light-green': '#86C232',
        'c-dark-background': '#222629',
        'c-line-green': '#61892F'
      },
    },
  },
  plugins: [],
}
