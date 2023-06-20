/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Itim: ['Itim', 'sans-serif'],
        Baumans: ['Baumans', 'cursive'],
        JetbrainsMono:['JetBrains Mono','cursive']
      }
    },
    colors: {
      'primary-dark': '#111111',
      'secondary-dark': '#282828',
      'secondary-dark-2': '#232323',
      'item-bg-dark': '#504D4D',
      'item-active-dark': '#A9A9A9',
      'text-white': '#ffffff',
      'text-grey':'#E3E1E1',
      'text-color-heading':'#FD6060'
    }
  },
  plugins: [],
}

