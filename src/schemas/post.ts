import {z} from "zod"

const tagSchema = z
    .string()
    .trim()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)

const postFrontmatterSchema = z.strictObject({
    date: z.iso.date(),
    slug: z
        .string()
        .trim()
        .min(1)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    tags: z.array(tagSchema).refine(tags => {
        return new Set(tags).size === tags.length
    }, "Tags must be unique"),
    title: z.string().trim().min(1),
    topic: z.enum(["coding", "life", "tech"]),
})

type PostFrontmatter = z.infer<typeof postFrontmatterSchema>

export {postFrontmatterSchema}
export type {PostFrontmatter}
