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
        text: "#e0f7ff",
        background: "#000e14",
        primary: "#012fd5",
        secondary: "#521700",
        accent: "#fece20",
      },
    },
  },
  plugins: [require("daisyui")],
};
