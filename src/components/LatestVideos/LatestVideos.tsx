import {Link} from "@remix-run/react"
import type {FC} from "react"
import type {Video} from "types/video"
import {createYouTubeUrl} from "utils/cloudinary"

type LatestVideosProps = {
    latestVideos: Video[]
}

const LatestVideos: FC<LatestVideosProps> = ({latestVideos}) => {
    return (
        <div className="grid grid-cols-2 justify-items-start gap-4 max-[700px]:grid-cols-1">
            {latestVideos.map(latestVideo => {
                return (
                    <Link
                        key={latestVideo.id}
                        to={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                    >
                        <img
                            src={createYouTubeUrl(latestVideo.id)}
                            alt={latestVideo.title}
                            width="1280"
                            height="720"
                            className="rounded border-3 border-solid border-black shadow-box transition duration-300 hover:shadow-none dark:border-white dark:shadow-box-white hover:dark:shadow-none"
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default LatestVideos
