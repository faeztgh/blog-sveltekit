/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //dark
        'primary':"#3C4390",
        //light
        'secondary':"#F5DEE0",
      },
    },
   
  },
 
  plugins: [],
}
