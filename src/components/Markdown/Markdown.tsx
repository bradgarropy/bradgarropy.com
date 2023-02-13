import classnames from "classnames"
import React, {FC, ReactElement} from "react"

type MarkdownProps = {
    content: ReactElement
    className?: string
}

const Markdown: FC<MarkdownProps> = ({content, className}) => {
    return (
        <div
            className={classnames(
                "prose-md prose prose-purple max-w-3xl prose-a:font-normal prose-a:text-gray-700 prose-a:no-underline prose-a:shadow-link prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover prose-code:rounded prose-code:bg-[#2d2b55] prose-code:py-1 prose-code:px-2 prose-code:text-[#fad000] before:prose-code:content-none after:prose-code:content-none prose-pre:bg-[#2D2B55] prose-img:mx-auto prose-[iframe]:w-100",
                className,
            )}
        >
            {content}
        </div>
    )
}

export default Markdown
