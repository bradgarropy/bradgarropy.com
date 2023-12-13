import "@testing-library/jest-dom/vitest"

import {cleanup} from "@testing-library/react"
import {afterEach, vi} from "vitest"

import {mockRemix} from "~/test-utils/mocks/remix"

afterEach(() => {
    cleanup()
})

vi.mock("@remix-run/react", () => mockRemix)
