import type {FC} from "react"

import Markdown from "~/components/Markdown"
import useMarkdown from "~/hooks/useMarkdown"
import type {RenderedPage} from "~/types/page"

type ResumeProps = {
    resume: RenderedPage
}

const Resume: FC<ResumeProps> = ({resume}) => {
    const markdown = useMarkdown(resume.html)
    return <Markdown content={markdown} />
}

export default Resume
