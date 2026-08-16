import {z} from "zod"

const nowFrontmatterSchema = z.strictObject({
    date: z.iso.date(),
})

type NowFrontmatter = z.infer<typeof nowFrontmatterSchema>

export {nowFrontmatterSchema}
export type {NowFrontmatter}
