import FancyLink from "components/FancyLink"
import Heading from "components/Heading"
import Testimonials from "components/Testimonials"
import {FC} from "react"
import {Testimonial} from "types/testimonial"

type HireMeProps = {
    testimonials: Testimonial[]
}

const HireMe: FC<HireMeProps> = ({testimonials}) => {
    return (
        <div className="grid gap-y-9">
            <h1 className="font-heading text-4xl font-extrabold">
                🤝 let&apos;s work together
            </h1>

            <p>
                I just snagged a new job at{" "}
                <FancyLink to="https://atlassian.com">
                    <span className="font-semibold">Atlassian</span>
                </FancyLink>
                , working on{" "}
                <FancyLink to="https://trello.com">
                    <span className="font-semibold">Trello</span>
                </FancyLink>{" "}
                as a{" "}
                <span className="italic">Developer Experience Engineer</span>.
                Although I&apos;m not actively looking for a new role, please
                check out my{" "}
                <FancyLink to="https://bradgarropy.com/resume">
                    <span className="font-semibold">resume</span>
                </FancyLink>{" "}
                and{" "}
                <FancyLink to="https://bradgarropy.com/contact">
                    <span className="font-semibold">contact</span>
                </FancyLink>{" "}
                me!
            </p>

            <div className="prose prose-h1:font-bold dark:prose-invert">
                <Heading level={1} id="testimonials">
                    💯 what people think of me
                </Heading>
            </div>

            <Testimonials testimonials={testimonials} />
        </div>
    )
}

export default HireMe
