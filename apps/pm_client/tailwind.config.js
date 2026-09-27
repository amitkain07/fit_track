/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        warm: {
          bg: '#FAF7F2',
          surface: '#FFFFFF',
          muted: '#F4EFE6',
          border: '#E8E1D5',
          dark: '#1E1D1B',
          stone: '#5C5852',
          terracotta: '#BE6444',
          sage: '#3C6044',
        }
      }
    },
  },
  plugins: [],
};
