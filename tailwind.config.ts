import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#f4f9f8',
        mint: '#91c8be',
        'mint-deep': '#389c8e',
        teal: '#158072',
        deep: '#094c43',
        'deep-2': '#0e332d',
        ink: '#132b27',
        line: '#d9e8e4',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'rotate(7deg) translateY(0)' },
          '50%': { transform: 'rotate(4deg) translateY(-12px)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        heroFadeIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        detailFade: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pageFade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        slideIn: 'slideIn .4s ease',
        heroFadeIn: 'heroFadeIn .8s cubic-bezier(.22,1,.36,1) both',
        detailFade: 'detailFade .45s cubic-bezier(.22,1,.36,1)',
        pageFade: 'pageFade .5s cubic-bezier(.22,1,.36,1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
