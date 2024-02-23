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
        <div className="grid gap-y-16">
            <section>
                <h1 className="mb-9 font-heading text-4xl font-extrabold">
                    🤝 let&apos;s work together
                </h1>

                <p className="mb-6">
                    I&apos;m actively looking for a new role as a{" "}
                    <span className="italic">Senior Frontend Developer</span>.
                    <br />
                    Please check out my{" "}
                    <FancyLink to="/resume">
                        <span className="font-bold">resume</span>
                    </FancyLink>{" "}
                    and{" "}
                    <FancyLink to="/contact">
                        <span className="font-bold">contact</span>
                    </FancyLink>{" "}
                    me!
                </p>

                <p className="mb-6">
                    My ideal job would look something like this.
                </p>

                <ul>
                    <li>👨🏼‍💻 Senior Frontend Developer</li>
                    <li>🆕 New team or project </li>
                    <li>🎨 Dedicated product manager and designer</li>
                    <li>💿 TypeScript, React, Remix, Tailwind, Prisma stack</li>
                    <li>🏡 Fully remote</li>
                    <li>🏖️ Unlimited paid time off</li>
                    <li>🧠 Learning budget</li>
                </ul>
            </section>

            <section>
                <div className="prose mb-9 dark:prose-invert prose-h1:font-bold">
                    <Heading level={1} id="testimonials">
                        💯 what people think of me
                    </Heading>
                </div>

                <Testimonials testimonials={testimonials} />
            </section>
        </div>
    )
}

export default HireMe
