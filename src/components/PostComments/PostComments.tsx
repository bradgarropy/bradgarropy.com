import LinkButton from "components/LinkButton"
import {useMeta} from "hooks"
import type {FC} from "react"

type PostCommentsProps = {
    slug: string
}

const PostComments: FC<PostCommentsProps> = ({slug}) => {
    const meta = useMeta()

    const query = encodeURIComponent(`${meta.siteUrl}/blog/${slug}`)
    const discuss = `https://twitter.com/search?q=${query}`

    return <LinkButton to={discuss}>💬 discuss on twitter</LinkButton>
}

export default PostComments
