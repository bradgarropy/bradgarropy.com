import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC} from "react"
import {Markdown as MarkdownType} from "types/markdown"

type ResumeProps = {
    resume: MarkdownType
}

const Resume: FC<ResumeProps> = ({resume}) => {
    const markdown = useMarkdown(resume.html)
    return <Markdown content={markdown} />
}

export default Resume
