import {Link} from "@remix-run/react"
import Head from "next/head"
import {createElement, Fragment} from "react"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import {unified} from "unified"

import Heading from "~/components/Heading"

const useMarkdown = (html: string) => {
    const processor = unified()
        .use(rehypeParse)
        .use(rehypeReact, {
            createElement,
            Fragment,
            components: {
                html: ({children}) => children,
                head: ({children}) => <Head>{children}</Head>,
                body: ({children}) => children,
                a: ({href, children, ...props}) => {
                    return (
                        <Link to={href} {...props}>
                            {children}
                        </Link>
                    )
                },
                h1: ({children}) => {
                    return <Heading level={1}>{children}</Heading>
                },
                h2: ({children}) => {
                    return <Heading level={2}>{children}</Heading>
                },
                h3: ({children}) => {
                    return <Heading level={3}>{children}</Heading>
                },
            },
        })

    const file = processor.processSync(html)
    const markdown = file.result

    return markdown
}

export default useMarkdown
