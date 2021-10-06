import Link from "@bradgarropy/gatsby-link"
import {GatsbyImage} from "gatsby-plugin-image"
import {useLatestVideos} from "hooks"

import * as styles from "./LatestVideos.module.css"

const LatestVideos = () => {
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
                            <GatsbyImage
                                image={latestVideo.thumbnail}
                                alt={latestVideo.title}
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
