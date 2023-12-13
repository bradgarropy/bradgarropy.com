import {Link} from "@remix-run/react"
import type {FC} from "react"

import type {Post} from "~/types/post"
import {formatDate} from "~/utils/date"

type PostMetaProps = Pick<Post["frontmatter"], "date" | "tags" | "topic">

const PostMeta: FC<PostMetaProps> = ({date, tags, topic}) => {
    return (
        <div className="flex justify-between">
            <span className="lowercase">
                {formatDate(date)} in{" "}
                <Link
                    to={`/topic/${topic}`}
                    className="transition duration-300 hover:text-purple-400"
                >
                    #{topic}
                </Link>
            </span>

            <span className="flex items-center gap-x-2">
                {tags.map(tag => {
                    return (
                        <Link
                            key={tag}
                            className="rounded bg-black px-2 font-heading text-sm font-bold text-white duration-300 hover:bg-purple-400 dark:bg-white dark:text-black dark:hover:bg-purple-400"
                            to={`/tag/${tag}`}
                        >
                            {tag}
                        </Link>
                    )
                })}
            </span>
        </div>
    )
}

export default PostMeta
