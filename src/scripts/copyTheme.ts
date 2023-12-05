import {copyFileSync, cpSync} from "node:fs"

cpSync("node_modules/shiki/themes", "build/shiki/themes", {recursive: true})
cpSync("node_modules/shiki/languages", "build/shiki/languages", {
    recursive: true,
})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "build/shiki/themes/shades-of-purple.json",
)
