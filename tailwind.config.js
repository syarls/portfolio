/** @type {import('tailwindcss').Config} */
export default {
  content: [
 "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 1.5s ease forwards',
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      screens: {
      'xs': {'max': '425px'},   
        'md': {'max': '769px'},  
        'lg': {'max': '1325px'}, 
      }
    },
  },
  
  plugins: [],
}

