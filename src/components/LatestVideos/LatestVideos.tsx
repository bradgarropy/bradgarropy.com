import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {Video} from "types/video"
import {createYouTubeUrl} from "utils/cloudinary"

import LatestVideosStyles from "./LatestVideos.module.css"

type LatestVideosProps = {
    latestVideos: Video[]
}

const LatestVideos: FC<LatestVideosProps> = ({latestVideos}) => {
    return (
        <div className="grid grid-cols-2 gap-4 justify-items-start max-[700px]:grid-cols-1">
            {latestVideos.map(latestVideo => {
                return (
                    <Link
                        key={latestVideo.id}
                        to={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                        className={LatestVideosStyles.thumbnailLink}
                    >
                        <img
                            src={createYouTubeUrl(latestVideo.id)}
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
