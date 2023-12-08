import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

const config = defineConfig({
    passWithNoTests: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    plugins: [tsconfigPaths(), react()],
    test: {
        clearMocks: true,
        coverage: {
            provider: "v8",
            reporter: ["text"],
            reportOnFailure: false,
        },
        environment: "jsdom",
        globals: false,
        setupFiles: ["src/test-utils/setup.tsx"],
    },
})

export default config
