import Link from "@bradgarropy/next-link"
import {usePodcast} from "hooks"
import Image from "next/image"
import {FC} from "react"

import * as styles from "./Podcast.module.css"

const Podcast: FC = () => {
    const podcast = usePodcast()

    return (
        <div className={styles.podcast}>
            <Link to={podcast.link} data-testid={podcast.title}>
                <Image
                    src="../../../static/web-dev-weekly.png"
                    alt={podcast.title}
                    placeholder="blur"
                    className={styles.coverImageContainer}
                    imgClassName={styles.coverImage}
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
