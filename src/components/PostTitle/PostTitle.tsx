import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {Post} from "types/post"

type PostTitleProps = {
    title: Post["frontmatter"]["title"]
    slug?: Post["frontmatter"]["slug"]
}

const PostTitle: FC<PostTitleProps> = ({title, slug}) => {
    return (
        <h1 className="m-0 text-[40px] max-[750px]:text-2xl font-semibold font-heading text-black dark:text-white">
            {slug ? (
                <Link
                    to={`/blog/${slug}`}
                    className="hover:text-purple-400 duration-300 transition"
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
