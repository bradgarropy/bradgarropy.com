import {Link} from "@remix-run/react"
import type {ReactNode} from "react"
import {createElement, Fragment} from "react"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import {unified} from "unified"

import Heading from "~/components/Heading"

const useMarkdown = (html: string) => {
    const processor = unified()
        .use(rehypeParse)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        .use(rehypeReact, {
            createElement,
            Fragment,
            components: {
                html: ({children}: {children: ReactNode}) => children,
                head: ({children}: {children: ReactNode}) => children,
                body: ({children}: {children: ReactNode}) => children,
                a: ({
                    href,
                    children,
                    ...props
                }: {
                    href: string
                    children: ReactNode
                    props: Record<string, unknown>
                }) => {
                    return (
                        <Link to={href} {...props}>
                            {children}
                        </Link>
                    )
                },
                h1: ({children}: {children: ReactNode}) => {
                    return <Heading level={1}>{children}</Heading>
                },
                h2: ({children}: {children: ReactNode}) => {
                    return <Heading level={2}>{children}</Heading>
                },
                h3: ({children}: {children: ReactNode}) => {
                    return <Heading level={3}>{children}</Heading>
                },
            },
        })

    const file = processor.processSync(html)
    const markdown = file.result

    return markdown
}

export default useMarkdown
