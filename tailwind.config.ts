import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4B86',
        secondary: '#D6B454',
        dark: '#07223D',
        'light-gold': '#f8f6f0',
      },
      boxShadow: {
        hammer: '14px 14px 0px 0px',
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        contact: "url('/contact.jpg')",
      },

      animation: {
        'spin-fast': 'spin .6s linear infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
