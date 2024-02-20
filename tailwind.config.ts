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
        divider: "#182D32",
        content: "#182D32",
        primary: "#2FE4AB",
        primaryHover: "#82EDCC",
        textButtonPrimary: "#091011",
        textButtonPrimaryHover: "#045062",
        disabled: "#243D42",
        input: "#111F22",
        muted: "#475E64",
        light: "#D9EEF#",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
