import {expect, test} from "vitest"

import {youtubeTransformer} from "~/transformers/youtube"

test("detects youtube links", () => {
    expect(
        youtubeTransformer.shouldTransform("https://youtu.be/9zcU6oUOHVc"),
    ).toBeTruthy()
})

test("ignores non-youtube links", () => {
    expect(
        youtubeTransformer.shouldTransform("https://example.com"),
    ).toBeFalsy()
})

test("transforms youtube links", () => {
    const html = youtubeTransformer.getHTML("https://youtu.be/9zcU6oUOHVc")
    const node = new DOMParser().parseFromString(html, "text/html")
    const iframe = node.querySelector("iframe")

    expect(iframe?.title).toEqual("9zcU6oUOHVc")
    expect(iframe?.src).toEqual(
        "https://www.youtube-nocookie.com/embed/9zcU6oUOHVc",
    )
})

test("transforms youtube links with start", () => {
    const html = youtubeTransformer.getHTML("https://youtu.be/9zcU6oUOHVc?t=3")
    const node = new DOMParser().parseFromString(html, "text/html")
    const iframe = node.querySelector("iframe")

    expect(iframe?.title).toEqual("9zcU6oUOHVc")
    expect(iframe?.src).toEqual(
        "https://www.youtube-nocookie.com/embed/9zcU6oUOHVc?start=3",
    )
})
