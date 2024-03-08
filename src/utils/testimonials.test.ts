import {expect, test} from "vitest"

import {getTestimonials} from "~/utils/testimonials"

test("gets testimonials", async () => {
    const testimonials = await getTestimonials()

    expect(testimonials).toHaveLength(11)

    expect(testimonials).toContainEqual(
        expect.objectContaining({
            html: expect.any(String),
            frontmatter: {
                name: "James Quick",
                profile: "https://twitter.com/jamesqquick",
                photo: "/testimonials/james-quick.jpg",
            },
        }),
    )
})
