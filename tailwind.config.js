/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
    'atras': "url('./assets/imagenes/atras.jpg')",
  },
    keyframes: {
    'gradient-x': {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  },
      colors: {
        'rojo':{
          normal: '#e63946',
          intenso: '#FF0000'
          
        },
        'gris': {
          claro: '#e0e0e0',
          medio: '#9e9e9e',
          oscuro: '#424242',
        },
        'negro': '#000000',
        'vinotinto': '#800020',
        'blanco': '#ffffff',
        'azul': '#0a192f',
      },
    },
  },
  plugins: [],
};
