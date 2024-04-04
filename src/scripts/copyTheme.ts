import {copyFileSync, mkdirSync} from "node:fs"

mkdirSync("build/client/shiki/themes", {recursive: true})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json5",
)
