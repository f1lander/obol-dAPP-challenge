import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        // Primary Colors
        aquamarine: "#2FE3AB",
        viridian: "#058E6E",
        inchworm: "#B6EA5C",

        // Secondary Colors
        "dark-turquoise": "#32DDD0",
        flame: "#DD603C",
        "medium-purple": "#9167E4",

        // Gradients
        "primary-gradient": "linear-gradient(90deg, #2FE3AB 0%, #B6EA5C 100%)",
        "create-gradient": "linear-gradient(90deg, #32DDD0 0%, #0676E4 100%)",
        "run-gradient": "linear-gradient(90deg, #2FE3AB 0%, #B6EA5C 100%)",
        "test-gradient": "linear-gradient(90deg, #DD603C 0%, #E4C92F 100%)",
        "coordinate-gradient":
          "linear-gradient(90deg, #E4C92F 0%, #9167E4 100%)",

        // typography colors
        light: "#D9ECF3",
        body: "#9DBDC8",
        muted: "#475E64",

        // Background colors
        bg: {
          1: "#09011",
          2: "#111F22",
          3: "#182D32",
          4: "#243D42",
          5: "#2D4053",
        },
      },
      fontSize: {
        h1: ["52px", { lineHeight: "64px" }],
        h2: ["45px", { lineHeight: "56px" }],
        h3: ["32px", { lineHeight: "48px" }],
        h4: ["24px", { lineHeight: "32px" }],
        h5: ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "24px" }],
        metadata: ["12px", { lineHeight: "18px" }],
        subline: ["14px", { lineHeight: "24px" }],
      },
      fontWeight: {
        bold: "700",
        medium: "500",
      },
      letterSpacing: {
        tighter: "-0.02em",
        normal: "0em",
        subline: "0.01em",
      },
      textTransform: {
        sentence: "none", // There is no direct equivalent in Tailwind, this will keep text as is
        uppercase: "uppercase", // Only subline requires this
      },
    },
  },
  plugins: [],
};
export default config;
