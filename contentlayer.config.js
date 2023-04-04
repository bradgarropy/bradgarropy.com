import {defineDocumentType, makeSource} from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: "*.md",
    fields: {
        date: {
            type: "date",
            description: "post date",
            required: true,
        },
        slug: {
            type: "string",
            description: "post slug",
            required: true,
        },
        title: {
            type: "string",
            description: "post title",
            required: true,
        },
        topic: {
            type: "enum",
            options: ["coding", "tech", "life"],
            description: "post title",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post => `/blog/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: "content/posts",
    disableImportAliasWarning: true,
    documentTypes: [Post],
})
