import classnames from "classnames"
import React, {FC, ReactElement, ReactNode} from "react"
import EmbedsStyles from "styles/Embeds.module.css"

type MarkdownProps = {
    content: ReactElement
    className?: string
}

const Markdown: FC<MarkdownProps> = ({content, className}) => {
    return (
        <div
            className={classnames(
                EmbedsStyles.embeds,
                "prose prose-purple prose-md max-w-3xl prose-a:text-gray-700 prose-a:font-normal prose-a:shadow-link prose-a:no-underline prose-a:transition prose-a:duration-300 hover:prose-a:shadow-link-hover prose-img:mx-auto prose-code:bg-[#2d2b55] before:prose-code:content-none after:prose-code:content-none prose-code:text-[#fad000] prose-code:py-1 prose-code:px-2 prose-code:rounded prose-pre:bg-[#2D2B55]",
                className,
            )}
        >
            {content}
        </div>
    )
}

export default Markdown
