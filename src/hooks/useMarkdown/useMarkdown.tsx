import Link from "@bradgarropy/next-link"
import Heading from "components/Heading"
import Head from "next/head"
import Image from "next/image"
import React, {createElement, Fragment} from "react"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import LinkStyles from "styles/Link.module.css"
import {unified} from "unified"

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
                img: ({src, alt, width, height, ...props}) => {
                    return (
                        <a
                            href={src}
                            className={LinkStyles.image}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                {...props}
                            />
                        </a>
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
    const Markdown = file.result

    return Markdown
}

export default useMarkdown
