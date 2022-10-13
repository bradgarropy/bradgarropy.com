import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

const config = defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        coverage: {
            provider: "istanbul",
            reporter: ["text"],
        },
        css: {
            modules: {
                classNameStrategy: "non-scoped",
            },
        },
        environment: "happy-dom",
        passWithNoTests: true,
        setupFiles: "src/test-utils/setup.ts",
        watch: false,
    },
})

export default config