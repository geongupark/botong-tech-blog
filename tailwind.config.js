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
        underLine: {
          "0%": {width: "0px"},
          "100%": { width: "100%" },
        },
        shake: {
          "5%": { transform: "translateX(-0.2rem)" },
          "15%": { transform: "translateY(0.2rem)" },
          "30%": { transform: "rotate(-12deg)"},
          "40%": { transform: "translateY(-0.8rem)"},
          "60%": { transform: "rotate(12deg)" },
          "70%": { transform: "rotate(-8deg)"},
        },
      },
      animation: {
        underLine: "underLine 2s ease",
        shake: "shake 2s infinite ease",
      },
    },
  },
  plugins: [],
}

