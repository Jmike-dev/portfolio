/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            fontFamily: {
                lora: "'DM Mono', monospace",
                spartan: "'League Spartan', sans-serif",
            },
            colors: {
                text: '#00171f',
                background: '#ebf9ff',
                primary: '#2a58fe',
                secondary: '#ffc6ad',
                accent: '#dfaf01',
            },
        },
    },
    plugins: [require('daisyui')],
};
