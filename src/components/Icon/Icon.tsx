import {FC, HTMLAttributes} from "react"
import GatsbyIcon from "svg/gatsby.svg"
import JavascriptIcon from "svg/javascript.svg"
import LinkIcon from "svg/link.svg"
import NextIcon from "svg/next.svg"
import NodeIcon from "svg/node.svg"
import ReactIcon from "svg/reacticon.svg"
import SvelteIcon from "svg/svelte.svg"
import TailwindIcon from "svg/tailwind.svg"
import TypescriptIcon from "svg/typescript.svg"

type IconProps = {
    name: string
} & HTMLAttributes<SVGElement>

const Icon: FC<IconProps> = ({name, ...props}) => {
    switch (name) {
        case "gatsby":
            return <GatsbyIcon aria-label={name} {...props} />
        case "javascript":
            return <JavascriptIcon aria-label={name} {...props} />
        case "link":
            return <LinkIcon aria-label={name} {...props} />
        case "next":
            return <NextIcon aria-label={name} {...props} />
        case "node":
            return <NodeIcon aria-label={name} {...props} />
        case "react":
            return <ReactIcon aria-label={name} {...props} />
        case "svelte":
            return <SvelteIcon aria-label={name} {...props} />
        case "typescript":
            return <TypescriptIcon aria-label={name} {...props} />
        case "tailwind":
            return <TailwindIcon aria-label={name} {...props} />
        default:
            return null
    }
}

export default Icon
