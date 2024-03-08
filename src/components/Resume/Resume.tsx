import type {FC} from "react"

import Markdown from "~/components/Markdown"
import useMarkdown from "~/hooks/useMarkdown"
import type {TransformedMarkdown} from "~/types/markdown"

type ResumeProps = {
    resume: TransformedMarkdown
}

const Resume: FC<ResumeProps> = ({resume}) => {
    const markdown = useMarkdown(resume.html)
    return <Markdown content={markdown} />
}

export default Resume
