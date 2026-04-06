/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        cyber: {
          black: '#030712',
          navy: '#0F172A',
          card: '#1E293B',
          border: '#334155',
          cyan: '#06B6D4',
          'cyan-light': '#67E8F9',
          purple: '#8B5CF6',
          'purple-light': '#C4B5FD',
          amber: '#F59E0B',
          text: '#F1F5F9',
          muted: '#64748B',
          subtle: '#94A3B8',
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
        'hero-gradient': 'radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))',
        'glow-cyan': 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(6,182,212,0.25), 0 4px 30px rgba(0,0,0,0.5)',
        'cyber-purple': '0 0 20px rgba(139,92,246,0.25), 0 4px 30px rgba(0,0,0,0.5)',
        'glow': '0 0 30px rgba(6,182,212,0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
