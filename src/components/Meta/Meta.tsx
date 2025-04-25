import type {FC} from "react"

import {createImageUrl} from "~/utils/cloudinary"

type MetaProps = {
    title?: string
    twitterCard?: "summary" | "summary_large_image"
    facebookImage?: string
    twitterImage?: string
}

const Meta: FC<MetaProps> = ({
    title = "🏠 my home on the web",
    twitterCard = "summary",
    facebookImage = createImageUrl("/social/facebook.png"),
    twitterImage = createImageUrl("/social/twitter.png"),
}) => {
    return (
        <>
            <title>{title}</title>

            <meta property="og:url" content="https://bradgarropy.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={facebookImage} />
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:site" content="@bradgarropy" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:image" content={twitterImage} />
        </>
    )
}

export default Meta
