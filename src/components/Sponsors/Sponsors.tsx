import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import Section from "components/Section"
import SponsorsStyles from "components/Sponsors/Sponsors.module.css"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Sponsors as SponsorsType} from "types/sponsor"

type SponsorsProps = {
    sponsors: SponsorsType
}

const Sponsors: FC<SponsorsProps> = ({sponsors}) => {
    return (
        <>
            <Section
                className={classnames(SponsorsStyles.thanks, LinkStyles.fancy)}
                title="💜 thank you"
            >
                <p>
                    Each and every supporter I have incentivizes me to continue
                    creating libraries, videos, blogs, and streams. All earnings
                    will go directly towards improving the quality of my work,
                    and encouraging more frequent updates.
                </p>

                <p>
                    If you want to support me and be featured on this page go{" "}
                    <Link to="https://bradgarropy.com/sponsor">sponsor</Link>{" "}
                    me!
                </p>
            </Section>

            <div className={SponsorsStyles.tiers}>
                {Object.entries(sponsors).map(([frequency, sponsors]) => (
                    <Section key={frequency} title={frequency}>
                        {sponsors.length ? (
                            <div className={SponsorsStyles.sponsors}>
                                {sponsors.map(sponsor => (
                                    <Link
                                        className={SponsorsStyles.sponsor}
                                        key={sponsor.username}
                                        to={sponsor.profile}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            className={SponsorsStyles.avatar}
                                            src={sponsor.avatar}
                                            alt={sponsor.username}
                                        />

                                        <span className={SponsorsStyles.tier}>
                                            {sponsor.tier}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className={LinkStyles.fancy}>
                                Nobody yet,{" "}
                                <Link to="https://bradgarropy.com/sponsor">
                                    be the first
                                </Link>
                                !
                            </p>
                        )}
                    </Section>
                ))}
            </div>
        </>
    )
}

export default Sponsors
