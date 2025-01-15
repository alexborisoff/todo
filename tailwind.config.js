/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            bilbo: ['Bilbo'],
            ubuntu: ['Ubuntu'],
         },
         height: {
            '10vh': '10vh',
            '70vh': '70vh',
         },
         width: {
            '30vw': '30vw',
            '55vw': '55vw',
            '85vw': '85vw',
            '95vw': '95vw',
            'full-85': '85%',
         },
         borderRadius: {
            '50per': '50%',
         },
      },
      screens: {
         mobile: '320px',
         // => @media (min-width: 320px) { ... }

         tablet: '720px',
         // => @media (min-width: 900) { ... }

         desktop: '1020px',
         // => @media (min-width: 1280px) { ... }
      },
   },
   plugins: [],
};
