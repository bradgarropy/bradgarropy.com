import Link from "@bradgarropy/next-link"
import Head from "next/head"
import Image from "next/image"
import React, {createElement, FC, Fragment} from "react"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import FigureStyles from "styles/Figure.module.css"
import {unified} from "unified"

const PassThrough: FC = ({children}) => {
    return <>{children}</>
}

const useMarkdown = (html: string) => {
    const processor = unified()
        .use(rehypeParse)
        .use(rehypeReact, {
            createElement,
            Fragment,
            components: {
                html: PassThrough,
                head: ({children}) => <Head>{children}</Head>,
                body: PassThrough,
                a: ({href, children, ...props}) => {
                    return (
                        <Link to={href} {...props}>
                            {children}
                        </Link>
                    )
                },
                img: ({src, alt, width, height, ...props}) => {
                    return (
                        <figure className={FigureStyles.figure}>
                            <Image
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                {...props}
                            />
                        </figure>
                    )
                },
            },
        })

    const file = processor.processSync(html)
    const Markdown = file.result

    return Markdown
}

export default useMarkdown
