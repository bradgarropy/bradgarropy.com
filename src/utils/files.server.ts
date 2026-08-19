import type {Markdown} from "~/types/markdown"

const nowFiles = import.meta.glob<Markdown<unknown>>("/content/now/*.md", {
    eager: true,
})

const pageFiles = import.meta.glob<Markdown<unknown>>("/content/pages/*.md", {
    eager: true,
})

const postFiles = import.meta.glob<Markdown<unknown>>("/content/posts/*.md", {
    eager: true,
})

const testimonialFiles = import.meta.glob<Markdown<unknown>>(
    "/content/testimonials/*.md",
    {eager: true},
)

export {nowFiles, pageFiles, postFiles, testimonialFiles}
