/** @type {import('tailwindcss').Config} */

const typography = require("@tailwindcss/typography")

const config = {
    content: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
    theme: {
        extend: {
            borderWidth: {
                7: "7px",
            },
            boxShadow: theme => ({
                "box": `3px 3px 0 ${theme("colors.black")}`,
                "reverse-box": `-3px 3px 0 ${theme("colors.black")}`,
                "link": `inset 0 -2px ${theme("colors.purple.400")}`,
                "link-hover": `inset 0 -25px 0 ${theme("colors.purple.400")}`,
            }),
            gridTemplateColumns: {
                hero: "minmax(auto, 15.625rem) auto",
            },
        },
        fontFamily: {
            display: ["Righteous", "cursive"],
            text: ["Open Sans", "sans-serif"],
            heading: ["Montserrat", "sans-serif"],
        },
    },
    plugins: [typography],
}

module.exports = config
