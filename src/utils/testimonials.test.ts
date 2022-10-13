import {readdirSync} from "fs"
import matter from "gray-matter"
import {
    mockTestimonials,
    mockTestimonialsPaths,
    mockTestimonialsResponse,
} from "test-utils/mocks"
import {getTestimonials} from "utils/testimonials"
import {expect, Mock, test, vi} from "vitest"

vi.mock("fs")
vi.mock("gray-matter")

vi.mock("gatsby-remark-vscode", () => {
    return {
        remarkPlugin: tree => tree,
    }
})

const mockReadDirSync = readdirSync as Mock
mockReadDirSync.mockReturnValue(mockTestimonialsPaths)

const mockMatterRead = matter.read as Mock
mockMatterRead
    .mockReturnValueOnce(mockTestimonialsResponse[0])
    .mockReturnValueOnce(mockTestimonialsResponse[1])

test("gets testimonials", async () => {
    const testimonials = await getTestimonials()
    expect(testimonials).toEqual(mockTestimonials)
})
