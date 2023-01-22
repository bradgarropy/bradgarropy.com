import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import FancyLink from "components/FancyLink"
import Section from "components/Section"
import SponsorsStyles from "components/Sponsors/Sponsors.module.css"
import {FC} from "react"
import {Sponsors as SponsorsType} from "types/sponsor"
import {createExternalImageUrl} from "utils/cloudinary"

type SponsorsProps = {
    sponsors: SponsorsType
}

const Sponsors: FC<SponsorsProps> = ({sponsors}) => {
    return (
        <>
            <Section
                className={classnames(SponsorsStyles.thanks)}
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
                    <FancyLink to="https://bradgarropy.com/sponsor">
                        sponsor
                    </FancyLink>{" "}
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
                                        <img
                                            className={SponsorsStyles.avatar}
                                            src={createExternalImageUrl(
                                                sponsor.avatar,
                                            )}
                                            alt={sponsor.username}
                                            width="460"
                                            height="460"
                                        />

                                        <span className={SponsorsStyles.tier}>
                                            {sponsor.tier}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p>
                                Nobody yet,{" "}
                                <FancyLink to="https://bradgarropy.com/sponsor">
                                    be the first
                                </FancyLink>
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
