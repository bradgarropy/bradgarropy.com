import {copyFileSync, cpSync} from "node:fs"

cpSync("node_modules/shiki/themes", "src/shiki/themes", {recursive: true})
cpSync("node_modules/shiki/languages", "src/shiki/languages", {
    recursive: true,
})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "src/shiki/themes/shades-of-purple.json",
)
