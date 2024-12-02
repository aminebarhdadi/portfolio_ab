/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flyonui/dist/js/*.js'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      padding: '1rem',
    },
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin')
  ],
  flyonui: {
    themes: ["light", "dark", "gourmet"]
  }
};
