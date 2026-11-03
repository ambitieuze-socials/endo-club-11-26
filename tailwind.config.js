/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ["'Instrument Serif'", 'serif'],
      },
      colors: {
        purple: { DEFAULT: '#8B7EC8', deep: '#6B5EA8', light: '#B8A8D9' },
        pink: { DEFAULT: '#E08BA0', light: '#F2B5C8' },
        cream: { DEFAULT: '#F5F0E8', dark: '#EDE4D8' },
        peach: { DEFAULT: '#E8A882', light: '#F2C4A8' },
        offwhite: '#FFFCF8',
        brand: { dark: '#2D2438', mid: '#5C4E6E', light: '#9188A8', muted: '#C4B0E0' },
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%': { transform: 'translate(30px, -25px) scale(1.06)' },
          '70%': { transform: 'translate(-18px, 18px) scale(0.96)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '35%': { transform: 'translate(-25px, 20px) scale(1.04)' },
          '65%': { transform: 'translate(22px, -14px) scale(0.97)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.35)', opacity: '0.65' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out',
        'float1': 'float1 9s ease-in-out infinite',
        'float2': 'float2 11s ease-in-out infinite',
        'float1-reverse': 'float1 13s ease-in-out infinite reverse',
        'float2-delay': 'float2 10s ease-in-out infinite 2s',
        'pulse-dot': 'pulseDot 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
