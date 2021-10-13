import Link from "@bradgarropy/gatsby-link"
import {StaticImage} from "gatsby-plugin-image"
import {usePodcast} from "hooks"
import {FC} from "react"

import * as styles from "./Podcast.module.css"

const Podcast: FC = () => {
    const podcast = usePodcast()

    return (
        <div className={styles.podcast}>
            <Link to={podcast.link} data-testid={podcast.title}>
                <StaticImage
                    src="../../../static/web-dev-weekly.png"
                    alt={podcast.title}
                    layout="constrained"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    quality={100}
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
