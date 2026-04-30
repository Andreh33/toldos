import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        sand: {
          50: '#FBF8F3',
          100: '#F5EFE5',
          200: '#EADFCB',
        },
        ink: {
          900: '#1A1F2E',
          700: '#3D4860',
          600: '#5C6781',
        },
        sun: {
          400: '#E8B557',
          500: '#D49A35',
        },
        terracotta: {
          500: '#B86340',
        },
        leaf: {
          600: '#3F6B4F',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.025em',
      },
      boxShadow: {
        card: '0 8px 30px rgba(26, 31, 46, 0.08)',
        'card-hover': '0 18px 50px rgba(26, 31, 46, 0.14)',
        whatsapp: '0 8px 24px rgba(37, 211, 102, 0.4)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [animate],
};

export default config;
