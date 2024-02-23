import type {FC} from "react"

import FancyLink from "~/components/FancyLink"
import Heading from "~/components/Heading"
import Testimonials from "~/components/Testimonials"
import type {Testimonial} from "~/types/testimonial"

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
                I&apos;m actively looking for a new role as a{" "}
                <span className="italic">Senior Frontend Developer</span>.<br />
                Please check out my <FancyLink to="/resume">
                    resume
                </FancyLink>{" "}
                and <FancyLink to="/contact">contact</FancyLink> me!
            </p>

            <div className="prose dark:prose-invert prose-h1:font-bold">
                <Heading level={1} id="testimonials">
                    💯 what people think of me
                </Heading>
            </div>

            <Testimonials testimonials={testimonials} />
        </div>
    )
}

export default HireMe
