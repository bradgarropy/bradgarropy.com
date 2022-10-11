import type {Element} from "hast"
import {isElement} from "hast-util-is-element"
import {Node, visit, Visitor} from "unist-util-visit"
import {getImageDimensions} from "utils/cloudinary"

const rehypeCloudinaryImageSize = () => {
    const images: Element[] = []

    const visitor: Visitor = (node: Element) => {
        if (isElement(node, "img")) {
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

export {rehypeCloudinaryImageSize}
