import {expect, test} from "vitest"

import {getMeta} from "~/utils/meta"

import {createImageUrl} from "./cloudinary"

test("shows default meta", () => {
    const meta = getMeta()

    expect(meta).toEqual([
        {
            title: "🏠 my home on the web",
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
            content: "🏠 my home on the web",
        },
        {
            property: "og:image",
            content: createImageUrl("/social/facebook.png"),
        },
        {
            property: "twitter:card",
            content: "summary",
        },
        {
            property: "twitter:site",
            content: "@bradgarropy",
        },
        {
            property: "twitter:title",
            content: "🏠 my home on the web",
        },
        {
            property: "twitter:image",
            content: createImageUrl("/social/twitter.png"),
        },
    ])
})

test("shows custom meta", () => {
    const meta = getMeta({title: "testing"})

    expect(meta).toEqual([
        {
            title: "testing",
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
            content: "testing",
        },
        {
            property: "og:image",
            content: createImageUrl("/social/facebook.png"),
        },
        {
            property: "twitter:card",
            content: "summary",
        },
        {
            property: "twitter:site",
            content: "@bradgarropy",
        },
        {
            property: "twitter:title",
            content: "testing",
        },
        {
            property: "twitter:image",
            content: createImageUrl("/social/twitter.png"),
        },
    ])
})
