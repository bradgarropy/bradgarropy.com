import Link from "@bradgarropy/next-link"
import LinkButton from "components/LinkButton"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Now as NowType} from "types/now"
import {formatDate} from "utils/date"

import styles from "./Now.module.css"

type NowProps = {
    now: NowType
    newer: NowType
    older: NowType
}

const Now: FC<NowProps> = ({now, newer, older}) => {
    const {html, frontmatter} = now

    return (
        <>
            <div className={styles.header}>
                <h1>🧭 now</h1>
                <span>{formatDate(frontmatter.date)}</span>
            </div>

            <div
                className={LinkStyles.fancy}
                dangerouslySetInnerHTML={{__html: html}}
            />

            <div className={styles.footer}>
                <LinkButton
                    to={`/now/${newer?.frontmatter.date}`}
                    disabled={!newer}
                >
                    👈🏼 newer
                </LinkButton>

                <LinkButton
                    to={`/now/${older?.frontmatter.date}`}
                    reverse
                    disabled={!older}
                >
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
