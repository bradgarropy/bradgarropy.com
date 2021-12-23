import classnames from "classnames"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"

import styles from "./Resume.module.css"

type ResumeProps = {
    resume: Markdown
}

const Resume: FC<ResumeProps> = ({resume}) => {
    return (
        <section
            className={classnames(LinkStyles.fancy, styles.resume)}
            dangerouslySetInnerHTML={{__html: resume.html}}
        />
    )
}

export default Resume
