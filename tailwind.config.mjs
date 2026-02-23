/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer-text': 'shimmerText 5s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'bar-grow': 'barGrow 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'orb-drift': 'orbDrift 10s ease-in-out infinite',
        'orb-drift-2': 'orbDrift2 13s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmerText: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.12), 0 0 0 1px rgba(16, 185, 129, 0.25)' },
          '50%': { boxShadow: '0 0 50px rgba(16, 185, 129, 0.32), 0 0 0 1px rgba(16, 185, 129, 0.5)' },
        },
        barGrow: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        orbDrift: {
          '0%, 100%': { transform: 'translate(-50%, 0) scale(1)' },
          '33%': { transform: 'translate(-52%, -3%) scale(1.04)' },
          '66%': { transform: 'translate(-48%, 2%) scale(0.97)' },
        },
        orbDrift2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(3%, -4%) scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};
