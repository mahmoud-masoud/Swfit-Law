import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F4B86',
        secondary: '#B49C5D',
        dark: '#07223D',
        'bright-gold': '#DFB955',
        'light-gold': '#f8f6f0',
      },
      boxShadow: {
        hammer: '14px 14px 0px 0px',
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
        contact: "url('/contact.webp')",
      },

      animation: {
        'spin-fast': 'spin .6s linear infinite',
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(calc(0% + 16px)' },
          '100%': { transform: 'translateX(calc(-100% + -16px))' },
        },
        marquee2: {
          '0%': { transform: 'translateX(calc100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
