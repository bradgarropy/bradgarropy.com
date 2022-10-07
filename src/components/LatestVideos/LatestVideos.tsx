import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {Video} from "types/video"

import LatestVideosStyles from "./LatestVideos.module.css"

type LatestVideosProps = {
    latestVideos: Video[]
}

const LatestVideos: FC<LatestVideosProps> = ({latestVideos}) => {
    return (
        <div className={LatestVideosStyles.latestVideos}>
            {latestVideos.map(latestVideo => {
                return (
                    <Link
                        key={latestVideo.id}
                        to={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                        className={LatestVideosStyles.thumbnailLink}
                    >
                        <img
                            src={latestVideo.thumbnail}
                            alt={latestVideo.title}
                            width="1280"
                            height="720"
                            className={LatestVideosStyles.thumbnail}
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default LatestVideos
