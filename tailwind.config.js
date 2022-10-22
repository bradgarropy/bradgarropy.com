/** @type {import('tailwindcss').Config} */

const config = {
    content: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
    theme: {
        extend: {},
        fontFamily: {
            display: ["Righteous", "cursive"],
        },
    },
    plugins: [],
}

module.exports = config
