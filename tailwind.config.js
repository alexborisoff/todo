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

         mobile_horizontal: '480px',
         // => @media (min-width: 480px) { ... }

         tablet: '640px',
         // => @media (min-width: 640px) { ... }

         laptop: '1024px',
         // => @media (min-width: 1024px) { ... }

         desktop: '1280px',
         // => @media (min-width: 1280px) { ... }
      },
   },
   plugins: [],
};
