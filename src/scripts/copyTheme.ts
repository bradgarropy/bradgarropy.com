import {copyFileSync, cpSync} from "node:fs"

cpSync("node_modules/shikiji/dist/themes", "build/shikiji/themes", {
    recursive: true,
})

cpSync("node_modules/shikiji/dist/langs", "build/shikiji/langs", {
    recursive: true,
})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "build/shikiji/themes/shades-of-purple.json",
)
