import classnames from "classnames"
import FancyLink from "components/FancyLink"
import LinkButton from "components/LinkButton"
import {useMarkdown} from "hooks"
import {FC} from "react"
import CodeStyles from "styles/Code.module.css"
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
            <div className="flex items-baseline justify-between text-black lowercase">
                <h1>🧭 now</h1>
                <span>{formatDate(frontmatter.date)}</span>
            </div>

            <div
                className={classnames(
                    LinkStyles.fancy,
                    NowStyles.content,
                    CodeStyles.code,
                )}
            >
                {Markdown}
            </div>

            <div className="flex justify-between">
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

            <p className="mt-20 text-center italic">
                inspired by{" "}
                <FancyLink to="https://twitter.com/sivers">
                    derek sivers
                </FancyLink>{" "}
                and{" "}
                <FancyLink to="https://nownownow.com/about">
                    nownownow
                </FancyLink>
            </p>
        </>
    )
}

export default Now
