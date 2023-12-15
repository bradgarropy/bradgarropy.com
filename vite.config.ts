import {unstable_vitePlugin as remix} from "@remix-run/dev"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

const config = defineConfig({
    plugins: [
        process.env.VITEST
            ? react()
            : remix({
                  appDirectory: "src",
                  future: {},
                  ignoredRouteFiles: ["**/.*"],
                  serverModuleFormat: "esm",
              }),
        tsconfigPaths(),
    ],
    test: {
        clearMocks: true,
        coverage: {
            all: false,
            clean: true,
            cleanOnRerun: true,
            enabled: true,
            provider: "istanbul",
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
