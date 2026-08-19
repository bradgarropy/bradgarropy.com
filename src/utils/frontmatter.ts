import {z} from "zod"

const parseFrontmatter = <Schema extends z.ZodType>(
    path: string,
    schema: Schema,
    attributes: unknown,
): z.output<Schema> => {
    const result = schema.safeParse(attributes)

    if (!result.success) {
        throw new Error(
            `Invalid frontmatter in ${path}:\n${z.prettifyError(result.error)}`,
        )
    }

    return result.data
}

export {parseFrontmatter}
