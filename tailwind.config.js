import tailwindforms from "@tailwindcss/forms"
import rippleui from "rippleui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [rippleui, tailwindforms,],

  /** @type {import('rippleui').Config} */
  ripple : {
    prefix: "rip-",
  }
} 