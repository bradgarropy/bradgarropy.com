import Link from "@bradgarropy/next-link"
import Image from "next/image"
import {FC} from "react"
import {Podcast as PodcastType} from "types/podcast"

import styles from "./Podcast.module.css"

type PodcastProps = {
    podcast: PodcastType
}

const Podcast: FC<PodcastProps> = ({podcast}) => {
    return (
        <div className={styles.podcast}>
            <Link to={podcast.link} className={styles.podcastLink}>
                <Image
                    src={podcast.image}
                    alt={podcast.title}
                    width={3000}
                    height={3000}
                    className={styles.coverImage}
                />
            </Link>

            <div className={styles.description}>
                <span>a weekly podcast about web development hosted by</span>

                <div className={styles.hosts}>
                    <Link
                        className={styles.host}
                        to="https://twitter.com/bradgarropy"
                    >
                        brad garropy
                    </Link>

                    <span>/</span>

                    <Link
                        className={styles.host}
                        to="https://twitter.com/RGottleber"
                    >
                        richard gottleber
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Podcast
