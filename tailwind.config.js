// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#FF6F3C',
        darkGray: '#121212',
        lightGray: '#F5F5F7',
        accentBlue: '#00A8E8',
      },
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui'],
        futuristic: ['"Orbitron"', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        pulseSlow: 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'neon-orange': '0 0 8px 3px rgba(255,111,60,0.6)',
      },
    },
  },
  plugins: [],
};
