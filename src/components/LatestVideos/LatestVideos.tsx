import Link from "@bradgarropy/next-link"
import {useLatestVideos} from "hooks"
import Image from "next/image"
import {FC} from "react"

import styles from "./LatestVideos.module.css"

const LatestVideos: FC = () => {
    const latestVideos = useLatestVideos()

    return (
        <div className={styles.latestVideos}>
            {latestVideos.map(latestVideo => {
                return (
                    <Link
                        key={latestVideo.id}
                        to={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                    >
                        <div data-testid={latestVideo.id}>
                            <Image
                                src={latestVideo.thumbnail}
                                alt={latestVideo.title}
                                placeholder="blur"
                                className={styles.thumbnailContainer}
                                imgClassName={styles.thumbnail}
                            />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default LatestVideos
