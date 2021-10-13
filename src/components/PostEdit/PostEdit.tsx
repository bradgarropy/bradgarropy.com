import LinkButton from "components/LinkButton"
import {FC} from "react"

type PostEditProps = {
    slug: string
}

const PostEdit: FC<PostEditProps> = ({slug}) => {
    const edit = `https://github.com/bradgarropy/bradgarropy.com/edit/master/content/posts/${slug}/index.md`

    return (
        <LinkButton to={edit} reverse>
            💻 edit on github
        </LinkButton>
    )
}

export default PostEdit
