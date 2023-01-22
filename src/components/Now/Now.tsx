import FancyLink from "components/FancyLink"
import LinkButton from "components/LinkButton"
import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC} from "react"
import {Now as NowType} from "types/now"
import {formatDate} from "utils/date"

type NowProps = {
    now: NowType
    newer: NowType
    older: NowType
}

const Now: FC<NowProps> = ({now, newer, older}) => {
    const {html, frontmatter} = now
    const markdown = useMarkdown(html)

    return (
        <>
            <div className="flex items-baseline justify-between text-black lowercase">
                <h1>🧭 now</h1>
                <span>{formatDate(frontmatter.date)}</span>
            </div>

            <Markdown content={markdown} />

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
