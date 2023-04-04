import type {FC} from "react"

import FancyLink from "~/components/FancyLink"

const Contact: FC = () => {
    return (
        <div className="place-self-center">
            <h1 className="mb-7 font-heading text-[2rem] font-semibold">
                👋🏼 say hi
            </h1>

            <p className="mb-5">
                I enjoy connecting with other developers, drop me a message and
                let&apos;s talk!
            </p>

            <p>Social media is great for informal chats.</p>
            <p>Email works best for in depth discussions.</p>
            <p>Consider my AMA if others can benefit from the question.</p>

            <div className="mt-8 grid grid-cols-[repeat(2,auto)] justify-start justify-items-start gap-5 text-2xl">
                <span>📧</span>
                <FancyLink to="mailto:bradgarropy@gmail.com">
                    bradgarropy@gmail.com
                </FancyLink>

                <span>🙋🏼‍♂️</span>
                <FancyLink to="https://bradgarropy.com/ama">
                    ask me anything
                </FancyLink>

                <span>🐦</span>
                <FancyLink to="https://twitter.com/bradgarropy">
                    twitter
                </FancyLink>
            </div>
        </div>
    )
}

export default Contact
