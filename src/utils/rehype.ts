import type {Element} from "hast"
import {isElement} from "hast-util-is-element"
import {Node, SKIP, visit, Visitor} from "unist-util-visit"
import {getImageDimensions, isCloudinaryImage} from "utils/cloudinary"

type RehypeImageLinksOptions = {
    classes?: string[]
}

const rehypeImageLinks = (options: RehypeImageLinksOptions) => {
    const visitor: Visitor = (node: Element) => {
        if (isElement(node, "img")) {
            const linkNode: Element = {
                type: "element",
                tagName: "a",
                properties: {
                    class: options.classes.join(" "),
                    href: node.properties.src,
                },
                children: [{...node}],
            }

            Object.assign(node, linkNode)
            return SKIP
        }
    }

    const transformer = async (tree: Node) => {
        visit(tree, "element", visitor)
    }

    return transformer
}

const rehypeCloudinaryImageSize = () => {
    const images: Element[] = []

    const visitor: Visitor = (node: Element) => {
        if (
            isElement(node, "img") &&
            isCloudinaryImage(node.properties.src as string)
        ) {
            images.push(node)
        }
    }

    const transformer = async (tree: Node) => {
        visit(tree, "element", visitor)

        const promises = images.map(image => {
            return getImageDimensions(image.properties.src as string)
        })

        const dimensions = await Promise.all(promises)

        images.forEach((image, index) => {
            image.properties.width = dimensions[index].width
            image.properties.height = dimensions[index].height
        })
    }

    return transformer
}

export {rehypeCloudinaryImageSize, rehypeImageLinks}
