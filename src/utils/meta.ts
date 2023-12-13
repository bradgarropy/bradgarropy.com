import type {MetaDescriptor} from "@remix-run/node"

import {createImageUrl} from "~/utils/cloudinary"

type MetaArgs = {
    title?: string
    twitterCard?: "summary" | "summary_large_image"
    facebookImage?: string
    twitterImage?: string
}

const getMeta = ({
    title = "🏠 my home on the web",
    twitterCard = "summary",
    facebookImage = createImageUrl("/social/facebook.png"),
    twitterImage = createImageUrl("/social/twitter.png"),
}: MetaArgs = {}): MetaDescriptor[] => {
    const meta: MetaDescriptor[] = [
        {
            title,
        },
        {
            property: "og:url",
            content: "https://bradgarropy.com",
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:image",
            content: facebookImage,
        },
        {
            property: "twitter:card",
            content: twitterCard,
        },
        {
            property: "twitter:site",
            content: "@bradgarropy",
        },
        {
            property: "twitter:title",
            content: title,
        },
        {
            property: "twitter:image",
            content: twitterImage,
        },
    ]

    return meta
}

export {getMeta}
