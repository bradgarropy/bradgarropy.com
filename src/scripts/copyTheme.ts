import {copyFileSync} from "node:fs"

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "public/theme.json",
)
