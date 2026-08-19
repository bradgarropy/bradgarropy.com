import {expect, test} from "vitest"

import {createTestimonials} from "~/collections/testimonial"
import {generateTestimonialFile} from "~/test-utils/generators"

const mockFiles = {
    "/content/testimonials/second-testimonial.md": {
        markdown: "Second testimonial.",
        attributes: {
            name: "Second Testimonial",
            photo: "/testimonials/second-testimonial.jpg",
            profile: "https://example.com/second-testimonial",
        },
    },
    "/content/testimonials/first-testimonial.md": {
        markdown: "First testimonial.",
        attributes: {
            name: "First Testimonial",
            photo: "/testimonials/first-testimonial.jpg",
            profile: "https://example.com/first-testimonial",
        },
    },
}

const mockFirstFile = mockFiles["/content/testimonials/first-testimonial.md"]
const mockSecondFile = mockFiles["/content/testimonials/second-testimonial.md"]

const mockFirstTestimonial = {
    path: "/content/testimonials/first-testimonial.md",
    markdown: mockFirstFile.markdown,
    frontmatter: mockFirstFile.attributes,
}

const mockSecondTestimonial = {
    path: "/content/testimonials/second-testimonial.md",
    markdown: mockSecondFile.markdown,
    frontmatter: mockSecondFile.attributes,
}

test("creates testimonials", () => {
    const testimonials = createTestimonials(mockFiles)
    expect(testimonials).toEqual([mockFirstTestimonial, mockSecondTestimonial])
})

test("creates no testimonials", () => {
    const testimonials = createTestimonials({})
    expect(testimonials).toEqual([])
})

test("rejects invalid frontmatter", () => {
    const mockTestimonialFile = generateTestimonialFile({profile: "invalid"})

    const invalidFiles = {
        "/content/testimonials/invalid-testimonial.md": mockTestimonialFile,
    }

    expect(() => createTestimonials(invalidFiles)).toThrow(
        "Invalid frontmatter in /content/testimonials/invalid-testimonial.md:\n✖ Invalid URL\n  → at profile",
    )
})

test("rejects missing filename", () => {
    const mockTestimonialFile = generateTestimonialFile()

    const invalidFiles = {
        "/": mockTestimonialFile,
    }

    expect(() => createTestimonials(invalidFiles)).toThrow(
        "Could not determine filename from /.",
    )
})

test("rejects non-markdown filename", () => {
    const mockTestimonialFile = generateTestimonialFile()

    const invalidFiles = {
        "/content/testimonials/invalid-testimonial.txt": mockTestimonialFile,
    }

    expect(() => createTestimonials(invalidFiles)).toThrow(
        "Testimonial filename must end in .md: /content/testimonials/invalid-testimonial.txt.",
    )
})
