/** @type {import('tailwindcss').Config} */

const config = {
    content: ["src/pages/**/*.tsx", "src/components/**/*.tsx"],
    theme: {
        extend: {
            gridTemplateColumns: {
                newsletter: "1fr auto",
            },
        },
        fontFamily: {
            display: ["Righteous", "cursive"],
        },
    },
    plugins: [],
}

module.exports = config
