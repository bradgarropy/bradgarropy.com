import {FC} from "react"
import GatsbyIcon from "svg/gatsby.svg"
import JavascriptIcon from "svg/javascript.svg"
import NextIcon from "svg/next.svg"
import NodeIcon from "svg/node.svg"
import ReactIcon from "svg/reacticon.svg"
import SvelteIcon from "svg/svelte.svg"
import TailwindIcon from "svg/tailwind.svg"
import TypescriptIcon from "svg/typescript.svg"

type IconProps = {
    name: string
}

const Icon: FC<IconProps> = ({name}) => {
    switch (name) {
        case "gatsby":
            return <GatsbyIcon aria-label={name} />
        case "javascript":
            return <JavascriptIcon aria-label={name} />
        case "next":
            return <NextIcon aria-label={name} />
        case "node":
            return <NodeIcon aria-label={name} />
        case "react":
            return <ReactIcon aria-label={name} />
        case "svelte":
            return <SvelteIcon aria-label={name} />
        case "typescript":
            return <TypescriptIcon aria-label={name} />
        case "tailwind":
            return <TailwindIcon aria-label={name} />
        default:
            return null
    }
}

export default Icon
