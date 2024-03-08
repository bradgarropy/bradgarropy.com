import {readdirSync, readFileSync} from "node:fs"

import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {mockTestimonials, mockTestimonialsPaths} from "~/test-utils/mocks"
import {getTestimonials} from "~/utils/testimonials"

vi.mock("node:fs")

const mockReadDirSync = readdirSync as Mock
mockReadDirSync.mockReturnValue(mockTestimonialsPaths)

const mockReadFileSync = readFileSync as Mock
mockReadFileSync.mockReturnValue("{}")

test("gets testimonials", async () => {
    const testimonials = await getTestimonials()
    expect(testimonials).toEqual(mockTestimonials)
})
