import {reactRouter} from "@react-router/dev/vite"
import tailwind from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import {reactRouterDevTools} from "react-router-devtools"
import {defineConfig} from "vite"
import json5 from "vite-plugin-json5"
import {Mode, plugin as markdown} from "vite-plugin-markdown"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        tailwind(),
        json5(),
        markdown({mode: [Mode.MARKDOWN]}),
        reactRouterDevTools({
            client: {
                showBreakpointIndicator: false,
            },
        }),
        process.env.VITEST ? react() : reactRouter(),
    ],
    server: {
        open: true,
        port: 3000,
    },
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
