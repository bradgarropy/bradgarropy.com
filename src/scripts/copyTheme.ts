import {copyFileSync, mkdirSync} from "node:fs"

mkdirSync("build/shiki/themes", {recursive: true})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "build/shiki/themes/shades-of-purple.json",
)
