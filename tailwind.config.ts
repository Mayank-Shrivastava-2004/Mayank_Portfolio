import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#080c14",
        "bg-alt":"#0d1220",
        "bg-card":"#111827",
        border:  "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.18)",
        primary: {
          DEFAULT: "#4f8ef7",
          dim:     "rgba(79,142,247,0.12)",
        },
        accent:  "#e6984c",
        purple:  "#a78bfa",
        text: {
          DEFAULT: "#e8ecf4",
          muted:   "#6b7a99",
          dim:     "#3e4a63",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grad-text": "linear-gradient(120deg,#4f8ef7 0%,#a78bfa 100%)",
        "grad-line": "linear-gradient(90deg,#4f8ef7,#a78bfa)",
      },
      animation: {
        float:      "float 6s ease-in-out infinite",
        "pulse-dot":"pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        "pulse-dot": {
          "0%,100%": { transform: "scale(1)", opacity: "0.3" },
          "50%":     { transform: "scale(1.9)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
