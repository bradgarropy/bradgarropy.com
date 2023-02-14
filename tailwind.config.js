/** @type {import('tailwindcss').Config} */

const typography = require("@tailwindcss/typography")

const config = {
    content: [
        "src/pages/**/*.tsx",
        "src/components/**/*.tsx",
        "src/transformers/**/*.ts",
    ],
    darkMode: "class",
    plugins: [typography],
    theme: {
        extend: {
            animation: {
                pulse: "pulse 2s infinite ease-out",
            },
            borderWidth: {
                3: "3px",
                5: "5px",
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
            keyframes: {
                pulse: {
                    "0%": {
                        opacity: "100%",
                    },
                    "50%": {
                        opacity: "20%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
            },
        },
        fontFamily: {
            display: ["Righteous", "cursive"],
            text: ["Open Sans", "sans-serif"],
            heading: ["Montserrat", "sans-serif"],
        },
    },
}

module.exports = config
