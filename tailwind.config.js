/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'DM Mono', monospace",
        spartan: "'League Spartan', sans-serif",
      },
      colors: {
        primary: {
          "teal-green": "#24596D",
          purple: "#9C69CC",
          "soft-brown": "#D5CABD",
          Fuchsia: "#C690F0",
          sky: "#00B5F9",
          Cyan: "#06B6D4",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
