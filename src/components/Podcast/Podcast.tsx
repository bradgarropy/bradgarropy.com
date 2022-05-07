import Link from "@bradgarropy/next-link"
import PodcastStyles from "components/Podcast/Podcast.module.css"
import Image from "next/image"
import {FC} from "react"
import {Podcast as PodcastType} from "types/podcast"

import thumbnail from "../../../public/images/pages/home/web-dev-weekly.png"

type PodcastProps = {
    podcast: PodcastType
}

const Podcast: FC<PodcastProps> = ({podcast}) => {
    return (
        <div className={PodcastStyles.podcast}>
            <Link to={podcast.link} className={PodcastStyles.podcastLink}>
                <Image
                    src={thumbnail}
                    alt={podcast.title}
                    width={3000}
                    height={3000}
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
