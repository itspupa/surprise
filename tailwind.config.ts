import type { Config } from "tailwindcss";

module.exports = {
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 6px #facc15)' },
          '100%': { transform: 'scale(1.25)', filter: 'drop-shadow(0 0 16px #facc15)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        snow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 400px' },
        },
      },
      animation: {
        'star-glow': 'glow 1.4s ease-in-out infinite alternate',
        'tree-float': 'float 3s ease-in-out infinite',
        'snow': 'snow 10s linear infinite',
      },
    },
  },
  extend: {
    keyframes: {
      starSpin: {
        '0%': { transform: 'rotate(0deg) scale(1)' },
        '100%': { transform: 'rotate(360deg) scale(1.2)' },
      },
    },
    animation: {
      'star-spin': 'starSpin 2.5s linear infinite',
    },
  },
  plugins: [],
};



