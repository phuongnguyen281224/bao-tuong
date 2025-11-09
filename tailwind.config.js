/** @type {import(''tailwindcss'').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2f2a23",
        muted: "#6c645d",
        brand: {
          orange: "#f97316",
          lilac: "#8b5cf6",
          sky: "#0ea5e9",
          forest: "#0b7d4f",
        },
      },
      fontFamily: {
        display: ["Poppins", "Segoe UI", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        hero: "0 20px 60px rgba(15,23,42,0.12)",
        card: "0 12px 30px rgba(15,23,42,0.15)",
      },
    },
  },
  plugins: [],
};
