import Link from "@bradgarropy/next-link"
import type {FC} from "react"
import type {Post} from "types/post"

type PostTitleProps = {
    title: Post["frontmatter"]["title"]
    slug?: Post["frontmatter"]["slug"]
}

const PostTitle: FC<PostTitleProps> = ({title, slug}) => {
    return (
        <h1 className="m-0 font-heading text-[40px] font-semibold max-[750px]:text-2xl">
            {slug ? (
                <Link
                    to={`/blog/${slug}`}
                    className="transition duration-300 hover:text-purple-400"
                >
                    {title}
                </Link>
            ) : (
                title
            )}
        </h1>
    )
}

export default PostTitle
