import {render} from "@testing-library/react"
import {expect, test} from "vitest"

import Meta from "~/components/Meta"
import {createImageUrl} from "~/utils/cloudinary"

test("shows default meta", () => {
    render(<Meta />)

    expect(document.title).toEqual("🏠 my home on the web")

    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogType = document.querySelector('meta[property="og:type"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    const twitterCard = document.querySelector('meta[property="twitter:card"]')
    const twitterSite = document.querySelector('meta[property="twitter:site"]')

    const twitterTitle = document.querySelector(
        'meta[property="twitter:title"]',
    )

    const twitterImage = document.querySelector(
        'meta[property="twitter:image"]',
    )

    expect(ogUrl?.getAttribute("content")).toEqual("https://bradgarropy.com")
    expect(ogType?.getAttribute("content")).toEqual("website")
    expect(ogTitle?.getAttribute("content")).toEqual("🏠 my home on the web")

    expect(ogImage?.getAttribute("content")).toEqual(
        createImageUrl("/social/facebook.png"),
    )

    expect(twitterCard?.getAttribute("content")).toEqual("summary")
    expect(twitterSite?.getAttribute("content")).toEqual("@bradgarropy")

    expect(twitterTitle?.getAttribute("content")).toEqual(
        "🏠 my home on the web",
    )

    expect(twitterImage?.getAttribute("content")).toEqual(
        createImageUrl("/social/twitter.png"),
    )
})

test("shows custom meta", () => {
    render(
        <Meta
            title="custom meta"
            facebookImage={createImageUrl("/facebookCustomMeta.png")}
            twitterCard="summary_large_image"
            twitterImage={createImageUrl("/twitterCustomMeta.png")}
        />,
    )

    expect(document.title).toEqual("custom meta")

    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogType = document.querySelector('meta[property="og:type"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    const twitterCard = document.querySelector('meta[property="twitter:card"]')
    const twitterSite = document.querySelector('meta[property="twitter:site"]')

    const twitterTitle = document.querySelector(
        'meta[property="twitter:title"]',
    )

    const twitterImage = document.querySelector(
        'meta[property="twitter:image"]',
    )

    expect(ogUrl?.getAttribute("content")).toEqual("https://bradgarropy.com")
    expect(ogType?.getAttribute("content")).toEqual("website")
    expect(ogTitle?.getAttribute("content")).toEqual("custom meta")

    expect(ogImage?.getAttribute("content")).toEqual(
        createImageUrl("/facebookCustomMeta.png"),
    )

    expect(twitterCard?.getAttribute("content")).toEqual("summary_large_image")
    expect(twitterSite?.getAttribute("content")).toEqual("@bradgarropy")
    expect(twitterTitle?.getAttribute("content")).toEqual("custom meta")

    expect(twitterImage?.getAttribute("content")).toEqual(
        createImageUrl("/twitterCustomMeta.png"),
    )
})
