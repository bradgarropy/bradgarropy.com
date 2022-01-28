import classnames from "classnames"
import {useMarkdown} from "hooks"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"

import styles from "./Resume.module.css"

type ResumeProps = {
    resume: Markdown
}

const Resume: FC<ResumeProps> = ({resume}) => {
    const Markdown = useMarkdown(resume.html)

    return (
        <section className={classnames(LinkStyles.fancy, styles.resume)}>
            {Markdown}
        </section>
    )
}

export default Resume
