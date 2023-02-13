import Link from "@bradgarropy/next-link"
import {FC} from "react"
import {Post} from "types/post"
import {formatDate} from "utils/date"

type PostMetaProps = Pick<Post["frontmatter"], "date" | "topic">

const PostMeta: FC<PostMetaProps> = ({date, topic}) => {
    return (
        <div>
            <p className="m-0 lowercase font-text">
                {formatDate(date)} in{" "}
                <Link
                    to={`/topic/${topic}`}
                    className="transition duration-300 text-black hover:text-purple-400"
                >
                    #{topic}
                </Link>
            </p>
        </div>
    )
}

export default PostMeta
