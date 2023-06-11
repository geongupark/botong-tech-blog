/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/.vitepress/**/*.js',
    './docs/.vitepress/**/*.vue',
    './docs/.vitepress/**/*.ts',
    './docs/til/**/',
    './docs/lab/**/',
    './docs/tag/**/'
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        shake: {
          "5%": { transform: "translateX(-0.2rem)" },
          "15%": { transform: "translateY(0.2rem)" },
          "30%": { transform: "rotate(-12deg)"},
          "40%": { transform: "translateY(-0.8rem)"},
          "60%": { transform: "rotate(12deg)" },
          "70%": { transform: "rotate(-8deg)"},
        },
        fancyUnderline: {
          "0%": {
            'background-image': 'linear-gradient(red, blue)',
            'background-size': '100% 3px',
            'background-repeat': 'no-repeat',
            'background-position': 'left bottom',
            'transition': 'background-size 300ms ease',
            // extra styling
            'text-decoration': 'none',
            'font-weight': '900',
          },
          "100%": {
            'background-size': '100% 3px',
          }
        }
      },
      animation: {
        shine: "shine 1s",
        shake: "shake 2s infinite ease",
        fancyUnderline: "fancyUnderline 1s ease"
      },
    },
  },
  plugins: [],
}

