import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00C2FF',
          blue: '#3B5BFF',
          purple: '#7A3CFF',
        },
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00C2FF 0%, #3B5BFF 50%, #7A3CFF 100%)',
        'gradient-brand-r': 'linear-gradient(to right, #00C2FF, #3B5BFF, #7A3CFF)',
        'gradient-brand-d': 'linear-gradient(to bottom, #00C2FF, #3B5BFF, #7A3CFF)',
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
