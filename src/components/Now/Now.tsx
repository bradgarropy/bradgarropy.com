import type {FC} from "react"

import FancyLink from "~/components/FancyLink"
import LinkButton from "~/components/LinkButton"
import Markdown from "~/components/Markdown"
import useMarkdown from "~/hooks/useMarkdown"
import type {NewerNow, Now as NowType, OlderNow} from "~/types/now"
import {formatDate} from "~/utils/date"

type NowProps = {
    now: NowType
    newer?: NewerNow
    older?: OlderNow
}

const Now: FC<NowProps> = ({now, newer, older}) => {
    const {html, frontmatter} = now
    const markdown = useMarkdown(html)

    return (
        <div className="grid content-start gap-y-16">
            <div className="flex items-baseline justify-between lowercase">
                <h1 className="font-heading text-[32px] font-semibold">
                    🧭 now
                </h1>

                <span className="">{formatDate(frontmatter.date)}</span>
            </div>

            <Markdown content={markdown} />

            <div className="flex content-start justify-between">
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

            <p className="my-10 text-center italic">
                inspired by{" "}
                <FancyLink to="https://twitter.com/sivers">
                    derek sivers
                </FancyLink>{" "}
                and{" "}
                <FancyLink to="https://nownownow.com/about">
                    nownownow
                </FancyLink>
            </p>
        </div>
    )
}

export default Now
