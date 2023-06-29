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
      'text-white': '#ffffff',
      'text-grey':'#E3E1E1',
      'text-color-heading':'#FD6060'
    }
  },
  plugins: [],
}

