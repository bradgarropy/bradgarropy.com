/** @type {import('tailwindcss').Config} */

const config = {
    content: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
    theme: {
        extend: {
            gridTemplateColumns: {
                newsletter: "1fr auto",
                hero: "minmax(auto, 15.625rem) auto",
                points: "",
            },
        },
        fontFamily: {
            display: ["Righteous", "cursive"],
            text: ["Open Sans", "sans-serif"],
        },
    },
    plugins: [],
}

module.exports = config
