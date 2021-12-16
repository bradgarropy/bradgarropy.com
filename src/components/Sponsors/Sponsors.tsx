import "styles/fancyLinks.css"

import Link from "@bradgarropy/next-link"
import Section from "components/Section"
import {FC} from "react"
import {Sponsors as SponsorsType} from "types/sponsor"

import * as styles from "./Sponsors.module.css"

type SponsorsProps = {
    sponsors: SponsorsType
}

const Sponsors: FC<SponsorsProps> = ({sponsors}) => {
    return (
        <>
            <Section
                className={`fancyLinks ${styles.thanks}`}
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

            <div className={styles.tiers}>
                {Object.entries(sponsors).map(([frequency, sponsors]) => (
                    <Section key={frequency} title={frequency}>
                        {sponsors.length ? (
                            sponsors.map(sponsor => (
                                <Link
                                    className={styles.sponsor}
                                    key={sponsor.username}
                                    to={sponsor.profile}
                                >
                                    <img
                                        className={styles.avatar}
                                        src={sponsor.avatar}
                                        alt={sponsor.username}
                                    />

                                    <span className={styles.tier}>
                                        {sponsor.tier}
                                    </span>
                                </Link>
                            ))
                        ) : (
                            <p className="fancyLinks">
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
