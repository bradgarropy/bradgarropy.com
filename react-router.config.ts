import type {Config} from "@react-router/dev/config"
import {vercelPreset} from "@vercel/react-router/vite"

const config = {
    appDirectory: "src",
    future: {
        unstable_optimizeDeps: true,
    },
    presets: [vercelPreset()],
    serverModuleFormat: "esm",
    ssr: true,
} satisfies Config

export default config
