import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          600: "#7c3eff"
        }
      },
      boxShadow: {
        glass: "0 10px 30px rgba(124,62,255,0.2)"
      }
    },
  },
  plugins: [],
}
export default config