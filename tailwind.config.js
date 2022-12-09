/** @type {import('tailwindcss').Config} */

const config = {
    content: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
    theme: {
        extend: {
            boxShadow: theme => ({box: `3px 3px 0 ${theme("colors.black")}`}),
            gridTemplateColumns: {
                hero: "minmax(auto, 15.625rem) auto",
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
