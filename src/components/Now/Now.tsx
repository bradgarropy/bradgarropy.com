import "styles/fancyLinks.css"

import Link from "@bradgarropy/next-link"
import LinkButton from "components/LinkButton"
import {FC} from "react"
import {Now as NowType} from "types/now"

import styles from "./Now.module.css"

type NowProps = {
    now: Pick<NowType, "html" | "frontmatter">
    newer?: NowType["previous"]
    older?: NowType["next"]
}

const Now: FC<NowProps> = ({now, newer, older}) => {
    const {html, frontmatter} = now

    return (
        <>
            <div className={styles.header}>
                <h1>🧭 now</h1>
                <span>{frontmatter.date}</span>
            </div>

            <div
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />

            <div className={styles.footer}>
                <LinkButton to={`/now/${newer}`} disabled={!newer}>
                    👈🏼 newer
                </LinkButton>

                <LinkButton to={`/now/${older}`} reverse disabled={!older}>
                    older 👉🏼
                </LinkButton>
            </div>

            <p className={`fancyLinks ${styles.inspiration}`}>
                inspired by{" "}
                <Link to="https://twitter.com/sivers">derek sivers</Link> and{" "}
                <Link to="https://nownownow.com/about">nownownow</Link>
            </p>
        </>
    )
}

export default Now
