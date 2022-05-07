import Link from "@bradgarropy/next-link"
import PodcastStyles from "components/Podcast/Podcast.module.css"
import Image from "next/image"
import {FC} from "react"

import podcastImage from "../../../public/images/pages/home/web-dev-weekly.jpg"

const Podcast: FC = () => {
    return (
        <div className={PodcastStyles.podcast}>
            <Link
                to="https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs"
                className={PodcastStyles.podcastLink}
            >
                <Image
                    src={podcastImage}
                    alt="Web Dev Weekly"
                    placeholder="blur"
                    className={PodcastStyles.coverImage}
                />
            </Link>

            <div className={PodcastStyles.description}>
                <span>a weekly podcast about web development hosted by</span>

                <div className={PodcastStyles.hosts}>
                    <Link
                        className={PodcastStyles.host}
                        to="https://twitter.com/bradgarropy"
                    >
                        brad garropy
                    </Link>

                    <span>/</span>

                    <Link
                        className={PodcastStyles.host}
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
