import Heading from "components/Heading"
import Markdown from "components/Markdown"
import Testimonials from "components/Testimonials"
import {useMarkdown} from "hooks"
import {FC} from "react"
import {Markdown as MarkdownType} from "types/markdown"
import {Testimonial} from "types/testimonial"

type HireMeProps = {
    hireMe: MarkdownType
    testimonials: Testimonial[]
}

const HireMe: FC<HireMeProps> = ({hireMe, testimonials}) => {
    const markdown = useMarkdown(hireMe.html)

    return (
        <>
            <Markdown content={markdown} />

            <Heading level={1} id="testimonials">
                💯 what people think of me
            </Heading>

            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMe
