import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi", ...defaultTheme.fontFamily.sans],
        titles: ["Satoshi", ...defaultTheme.fontFamily.sans],
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config