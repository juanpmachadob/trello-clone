import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        danger: "var(--color-danger)",
        text: {
          DEFAULT: "var(--color-text)",
          alternative: "var(--color-text-alternative)",
        },
        background: {
          DEFAULT: "var(--color-background)",
          alternative: "var(--color-background-alternative)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
