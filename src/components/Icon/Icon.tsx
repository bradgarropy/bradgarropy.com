import {FC} from "react"
import Gatsby from "svg/gatsby.svg"
import Javascript from "svg/javascript.svg"
import Next from "svg/next.svg"
import Node from "svg/node.svg"
import React from "svg/reacticon.svg"
import Svelte from "svg/svelte.svg"
import Tailwind from "svg/tailwind.svg"
import Typescript from "svg/typescript.svg"

type IconProps = {
    name: string
}

const Icon: FC<IconProps> = ({name}) => {
    switch (name) {
        case "gatsby":
            return <Gatsby aria-label={name} />

        case "javascript":
            return <Javascript aria-label={name} />

        case "next":
            return <Next aria-label={name} />

        case "node":
            return <Node aria-label={name} />

        case "react":
            return <React aria-label={name} />

        case "svelte":
            return <Svelte aria-label={name} />

        case "typescript":
            return <Typescript aria-label={name} />

        case "tailwind":
            return <Tailwind aria-label={name} />

        default:
            return null
    }
}

export default Icon
