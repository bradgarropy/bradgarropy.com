import {twitchTransformer} from "~/transformers/twitch"

test("detects twitch links", () => {
    expect(
        twitchTransformer.shouldTransform("https://twitch.tv/bradgarropy"),
    ).toBeTruthy()
})

test("ignores non-twitch links", () => {
    expect(twitchTransformer.shouldTransform("https://example.com")).toBeFalsy()
})

test("transforms twitch channels", () => {
    const html = twitchTransformer.getHTML("https://twitch.tv/bradgarropy")
    const node = new DOMParser().parseFromString(html, "text/html")
    const iframe = node.querySelector("iframe")

    expect(iframe?.src).toEqual(
        "https://player.twitch.tv/?channel=bradgarropy&parent=bradgarropy.com",
    )
})

test("transforms twitch videos", () => {
    const html = twitchTransformer.getHTML(
        "https://twitch.tv/videos/1272889918",
    )

    const node = new DOMParser().parseFromString(html, "text/html")
    const iframe = node.querySelector("iframe")

    expect(iframe?.src).toEqual(
        "https://player.twitch.tv/?video=1272889918&parent=bradgarropy.com",
    )
})

test("transforms twitch clips", () => {
    const domainHtml = twitchTransformer.getHTML(
        "https://twitch.tv/bradgarropy/clip/ZealousSpeedyStingrayUnSane",
    )

    const domainNode = new DOMParser().parseFromString(domainHtml, "text/html")
    const domainIframe = domainNode.querySelector("iframe")

    expect(domainIframe?.src).toEqual(
        "https://clips.twitch.tv/embed?clip=ZealousSpeedyStingrayUnSane&parent=bradgarropy.com",
    )

    const subdomainHtml = twitchTransformer.getHTML(
        "https://clips.twitch.tv/ZealousSpeedyStingrayUnSane",
    )

    const subdomainNode = new DOMParser().parseFromString(
        subdomainHtml,
        "text/html",
    )
    const subdomainIframe = subdomainNode.querySelector("iframe")

    expect(subdomainIframe?.src).toEqual(
        "https://clips.twitch.tv/embed?clip=ZealousSpeedyStingrayUnSane&parent=bradgarropy.com",
    )

    const emptyHtml = twitchTransformer.getHTML("https://twitch.tv")

    // eslint-disable-next-line quotes
    expect(emptyHtml).toEqual('<div class="twitch"></div>')
})
