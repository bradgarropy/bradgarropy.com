import {readdirSync, readFileSync} from "node:fs"

import matter from "gray-matter"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {
    mockTestimonials,
    mockTestimonialsPaths,
    mockTestimonialsResponse,
} from "~/test-utils/mocks"
import {getTestimonials} from "~/utils/testimonials"

vi.mock("node:fs")
vi.mock("gray-matter")

const mockReadDirSync = readdirSync as Mock
mockReadDirSync.mockReturnValue(mockTestimonialsPaths)

const mockReadFileSync = readFileSync as Mock
mockReadFileSync.mockReturnValue("{}")

const mockMatterRead = matter.read as Mock
mockMatterRead
    .mockReturnValueOnce(mockTestimonialsResponse[0])
    .mockReturnValueOnce(mockTestimonialsResponse[1])

test("gets testimonials", async () => {
    const testimonials = await getTestimonials()
    expect(testimonials).toEqual(mockTestimonials)
})
