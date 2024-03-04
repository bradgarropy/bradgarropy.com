import {copyFileSync, cpSync} from "node:fs"

cpSync("node_modules/shikiji/dist/themes", "build/server/shikiji/themes", {
    recursive: true,
})

cpSync("node_modules/shikiji/dist/langs", "build/server/shikiji/langs", {
    recursive: true,
})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "build/server/shikiji/themes/shades-of-purple.json",
)
