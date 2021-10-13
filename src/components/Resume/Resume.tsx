import "styles/fancyLinks.css"

import {useResume} from "hooks"
import {FC} from "react"

import * as styles from "./Resume.module.css"

const Resume: FC = () => {
    const resume = useResume()

    return (
        <section
            className={`fancyLinks ${styles.resume}`}
            dangerouslySetInnerHTML={{__html: resume}}
        />
    )
}

export default Resume
