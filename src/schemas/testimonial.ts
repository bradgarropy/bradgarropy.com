import {z} from "zod"

const testimonialFrontmatterSchema = z.strictObject({
    name: z.string().trim().min(1),
    photo: z
        .string()
        .startsWith("/", "Photo must be a relative path from root"),
    profile: z.httpUrl(),
})

type TestimonialFrontmatter = z.infer<typeof testimonialFrontmatterSchema>

export {testimonialFrontmatterSchema}
export type {TestimonialFrontmatter}
