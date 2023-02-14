import Link from "@bradgarropy/next-link"
import FancyLink from "components/FancyLink"
import Section from "components/Section"
import {FC} from "react"
import {Sponsors as SponsorsType} from "types/sponsor"
import {createExternalImageUrl} from "utils/cloudinary"

type SponsorsProps = {
    sponsors: SponsorsType
}

const Sponsors: FC<SponsorsProps> = ({sponsors}) => {
    return (
        <>
            <Section title="💜 thank you" className="font-text">
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

            <div className="grid gap-y-20">
                {Object.entries(sponsors).map(([frequency, sponsors]) => (
                    <Section key={frequency} title={frequency}>
                        {sponsors.length ? (
                            <div className="grid grid-flow-col justify-start gap-x-4">
                                {sponsors.map(sponsor => (
                                    <Link
                                        className="relative inline-block"
                                        key={sponsor.username}
                                        to={sponsor.profile}
                                    >
                                        <img
                                            className="m-0 w-[6.625rem] rounded-full border-5 border-black transition duration-300 hover:-rotate-2 hover:border-purple-400 dark:border-white hover:dark:border-purple-400"
                                            src={createExternalImageUrl(
                                                sponsor.avatar,
                                            )}
                                            alt={sponsor.username}
                                            width="460"
                                            height="460"
                                        />

                                        <span className="absolute -top-4 -left-4 text-[2.5rem]">
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
