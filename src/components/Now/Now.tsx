import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import LinkButton from "components/LinkButton"
import {useMarkdown} from "hooks"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Now as NowType} from "types/now"
import {formatDate} from "utils/date"

import NowStyles from "./Now.module.css"

type NowProps = {
    now: NowType
    newer: NowType
    older: NowType
}

const Now: FC<NowProps> = ({now, newer, older}) => {
    const {html, frontmatter} = now
    const Markdown = useMarkdown(html)

    return (
        <>
            <div className={NowStyles.header}>
                <h1>🧭 now</h1>
                <span>{formatDate(frontmatter.date)}</span>
            </div>

            <div className={classnames(LinkStyles.fancy, NowStyles.content)}>
                {Markdown}
            </div>

            <div className={NowStyles.footer}>
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

            <p className={classnames(LinkStyles.fancy, NowStyles.inspiration)}>
                inspired by{" "}
                <Link to="https://twitter.com/sivers">derek sivers</Link> and{" "}
                <Link to="https://nownownow.com/about">nownownow</Link>
            </p>
        </>
    )
}

export default Now
