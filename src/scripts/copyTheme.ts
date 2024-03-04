import {copyFileSync, cpSync} from "node:fs"

cpSync("node_modules/shikiji/dist/themes", "build/client/shikiji/themes", {
    recursive: true,
})

cpSync("node_modules/shikiji/dist/langs", "build/client/shikiji/langs", {
    recursive: true,
})

copyFileSync(
    "node_modules/shades-of-purple/themes/shades-of-purple-color-theme.json",
    "build/client/shikiji/themes/shades-of-purple.json",
)
