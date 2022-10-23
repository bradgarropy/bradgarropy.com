import PostComments from "components/PostComments"
import PostEdit from "components/PostEdit"
import {FC} from "react"

type PostFooterProps = {
    slug: string
}

const PostFooter: FC<PostFooterProps> = ({slug}) => {
    return (
        <section className="grid grid-flow-col justify-between">
            <PostComments slug={slug} />
            <PostEdit slug={slug} />
        </section>
    )
}

export default PostFooter
