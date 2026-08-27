/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"],
        display: ['"Space Grotesk"', '"Segoe UI"', "sans-serif"],
        body: ['"Inter"', '"Segoe UI"', "sans-serif"],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', "Consolas", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#09090b",
          elevated: "#111114",
          card: "#18181c",
        },
        border: {
          subtle: "#1e1e24",
          medium: "#27272f",
        },
        accent: {
          DEFAULT: "#c9a84c",
          dim: "#b08d35",
          soft: "rgba(201, 168, 76, 0.12)",
          border: "rgba(201, 168, 76, 0.25)",
        },
        muted: {
          DEFAULT: "#71717a",
          light: "#a1a1aa",
        },
      },
    },
  },
  plugins: [],
};
