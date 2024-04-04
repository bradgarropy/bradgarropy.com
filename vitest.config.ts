import react from "@vitejs/plugin-react"
import json5 from "vite-plugin-json5"
import {Mode, plugin as markdown} from "vite-plugin-markdown"
import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

const config = defineConfig({
    plugins: [
        tsconfigPaths(),
        json5(),
        markdown({mode: [Mode.MARKDOWN]}),
        react(),
    ],
    test: {
        clearMocks: true,
        coverage: {
            all: false,
            clean: true,
            cleanOnRerun: true,
            enabled: true,
            provider: "v8",
            reporter: ["text", "lcov"],
            reportOnFailure: false,
        },
        environment: "jsdom",
        globals: false,
        passWithNoTests: true,
        setupFiles: ["src/test-utils/setup.tsx"],
    },
})

export default config
