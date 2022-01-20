import {get} from "@bradgarropy/http"
import {TwitterOembed} from "types/oembed"

const shouldTransform = (url: string): boolean => {
    return url.includes("twitter.com")
}

const getHTML = async (string: string): Promise<string> => {
    const response: TwitterOembed = await get(
        `https://publish.twitter.com/oembed?url=${string}`,
    )

    const html = `
        <div class="twitter">
            ${response.html}
        </div>
    `

    return html
}

const twitterTransformer = {
    name: "twitterTransformer",
    shouldTransform,
    getHTML,
}

export {twitterTransformer}
