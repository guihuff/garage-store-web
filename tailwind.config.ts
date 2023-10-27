import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'foreground': '#000000',
        'background-start': '#FFFFFF',
        'emphasis-background': '#6C7E75',
        'emphasis-foreground': '#FFFFFF',
        'header-background': '#000000',
        'header-foreground': '#FFFFFF',
        'dark-foreground': '#FFFFFF',
        'dark-background-start': '#000000',
        'dark-emphasis-background': '#6C7E75',
        'dark-emphasis-foreground': '#FFFFFF',
        'dark-header-background': '#FFFFFF',
        'dark-header-foreground': '#000000',
      }
    },
  },
  plugins: [],
}
export default config
