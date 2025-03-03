/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-text': 'rgb(var(--text-rgb))',
        'custom-background': 'rgb(var(--background-rgb))',
        'custom-primary': 'rgb(var(--primary-rgb))',
        'custom-secondary': 'rgb(var(--secondary-rgb))',
        'custom-accent': 'rgb(var(--accent-rgb))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const colors = theme('colors');
      const opacityValues = {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      };

      const customColorUtilities = {};

      // Générer les classes pour les couleurs personnalisées
      Object.entries({
        'text-primary': 'var(--text-rgb)',
        'bg-primary': 'var(--primary-rgb)',
        'text-secondary': 'var(--secondary-rgb)',
        'bg-secondary': 'var(--secondary-rgb)',
        'text-accent': 'var(--accent-rgb)',
        'bg-accent': 'var(--accent-rgb)',
      }).forEach(([className, cssVar]) => {
        // Classe de base (sans opacité)
        customColorUtilities[`.${e(className)}`] = {
          [`${className.startsWith('text') ? 'color' : 'background-color'}`]: `rgb(${cssVar}) !important`,
        };

        // Classes avec opacité
        Object.entries(opacityValues).forEach(([opacityKey, opacityValue]) => {
          customColorUtilities[`.${e(`${className}-opacity-${opacityKey}`)}`] = {
            [`${className.startsWith('text') ? 'color' : 'background-color'}`]: `rgba(${cssVar}, ${opacityValue}) !important`,
          };
        });
      });

      addUtilities(customColorUtilities);
    }),
    require('daisyui')
  ],
}

