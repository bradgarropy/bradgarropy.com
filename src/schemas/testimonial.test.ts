import {expect, test} from "vitest"

import {testimonialFrontmatterSchema} from "~/schemas/testimonial"

test("validates frontmatter", () => {
    const frontmatter = {
        name: "Andrew Worcester",
        photo: "/testimonials/andrew-worcester.jpg",
        profile: "https://twitter.com/amwmedia",
    }

    const {success} = testimonialFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(true)
})

test("rejects invalid name", () => {
    const frontmatter = {
        name: "",
        photo: "/testimonials/andrew-worcester.jpg",
        profile: "https://twitter.com/amwmedia",
    }

    const {success} = testimonialFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects invalid photo", () => {
    const frontmatter = {
        name: "Andrew Worcester",
        photo: "testimonials/andrew-worcester.jpg",
        profile: "https://twitter.com/amwmedia",
    }

    const {success} = testimonialFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects invalid profile", () => {
    const frontmatter = {
        name: "Andrew Worcester",
        photo: "/testimonials/andrew-worcester.jpg",
        profile: "twitter.com/amwmedia",
    }

    const {success} = testimonialFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})
