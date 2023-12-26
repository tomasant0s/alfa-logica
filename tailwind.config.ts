
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors :{
        primary: '#520096'
      },

      backgroundImage:{
        'image1': "url('../assets/alfa-img1.jpg')",
        'image2': "url('../assets/hero.jpg')"
      }
    },
  },
  plugins: [],
}
export default config
