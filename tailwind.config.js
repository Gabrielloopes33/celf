/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'dodgerblue': "#01206c",
      'midnightblue': '#001B50',
      'electricblue' : '#1444EF',
      'grey500': '#ECECEC',
      'blue' : "#01206c",
      'lightgrey' : "#A8AEB9",
      'cornflowerblue' : "#01206c",
      'translucentwhite' : "rgba(255, 255, 255, 0.65)",
      'header': '#dce5ff',
      'terra' : '#9c0105',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '85xl': ['85px', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        'gradient-slow': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(#01206c 0.5px, transparent 0.5px)",
        'grid-blueprint': `
          linear-gradient(to right, #01206c 1px, transparent 1px),
          linear-gradient(to bottom, #01206c 1px, transparent 1px)
        `,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-size': '20px 20px',
        'grid-blueprint': '40px 40px',
      },
    },
  },
  plugins: [],
}