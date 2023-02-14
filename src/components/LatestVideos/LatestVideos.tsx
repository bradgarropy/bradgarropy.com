import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {Video} from "types/video"
import {createYouTubeUrl} from "utils/cloudinary"

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
                    >
                        <img
                            src={createYouTubeUrl(latestVideo.id)}
                            alt={latestVideo.title}
                            width="1280"
                            height="720"
                            className="border-3 border-solid border-black dark:border-white shadow-box transition duration-300 hover:shadow-none rounded-[0.3rem]"
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default LatestVideos
