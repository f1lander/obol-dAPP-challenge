import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#091011",
        teal: {
          500: "#2FE4AB",
          400: "#82EDCC",
        },
        gray: {
          100: "#D9EEF3",
          300: "#9CC2C9",
          600: "#111F22",
          700: "#475E64",
          800: "#182D32",
          900: "#243D42",
        },
      },
      fontSize: {
        "2xl": ["28px", "24px"],
        "3xl": ["32px", "48px"],
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(395px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
