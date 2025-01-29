import type {FC} from "react"

import LatestVideos from "~/components/LatestVideos"
import PostCard from "~/components/PostCard"
import type {PostFrontmatter} from "~/types/post"
import type {Video} from "~/types/video"

type FourOhFourProps = {
    post: PostFrontmatter
    videos: Video[]
}

const FourOhFour: FC<FourOhFourProps> = ({post, videos}) => {
    return (
        <div className="grid h-full content-center">
            <h1 className="font-heading mb-2 text-6xl font-black tracking-[-0.2rem]">
                There&apos;s nothing here.
            </h1>

            <p className="mb-12">
                But maybe you were looking for some of my recent content?
            </p>

            <PostCard className="mb-4" post={post} />
            <LatestVideos latestVideos={videos} />
        </div>
    )
}

export default FourOhFour
