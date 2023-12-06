import {readdirSync, readFileSync} from "node:fs"

import matter from "gray-matter"

import {
    mockTestimonials,
    mockTestimonialsPaths,
    mockTestimonialsResponse,
} from "~/test-utils/mocks"
import {getTestimonials} from "~/utils/testimonials"

jest.mock("node:fs")
jest.mock("gray-matter")

const mockReadDirSync = readdirSync as jest.Mock
mockReadDirSync.mockReturnValue(mockTestimonialsPaths)

const mockReadFileSync = readFileSync as jest.Mock
mockReadFileSync.mockReturnValue("{}")

const mockMatterRead = matter.read as jest.Mock
mockMatterRead
    .mockReturnValueOnce(mockTestimonialsResponse[0])
    .mockReturnValueOnce(mockTestimonialsResponse[1])

test("gets testimonials", async () => {
    const testimonials = await getTestimonials()
    expect(testimonials).toEqual(mockTestimonials)
})
