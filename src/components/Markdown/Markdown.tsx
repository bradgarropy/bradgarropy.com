import classnames from "classnames"
import type {FC, ReactElement} from "react"

type MarkdownProps = {
    content: ReactElement
    className?: string
}

const Markdown: FC<MarkdownProps> = ({content, className}) => {
    return (
        <div
            className={classnames(
                "prose-md prose-[iframe]:w-100 prose prose-purple dark:prose-invert prose-a:font-normal prose-a:text-gray-700 prose-a:underline prose-a:decoration-purple-400 prose-a:decoration-2 prose-a:underline-offset-4 prose-a:transition-colors prose-a:duration-300 prose-a:hover:decoration-purple-600 dark:prose-a:text-gray-300 dark:prose-a:hover:decoration-purple-300 prose-code:rounded prose-code:bg-[#2d2b55] prose-code:px-2 prose-code:py-1 prose-code:font-normal prose-code:text-[#fad000] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#2D2B55] prose-img:mx-auto prose-img:rounded max-w-3xl",
                className,
            )}
        >
            {content}
        </div>
    )
}

export default Markdown
