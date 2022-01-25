import {twitchTransformer} from "transformers/twitch"

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

    expect(html).toEqual(`
        <div class="twitch">
            <iframe
                src="https://player.twitch.tv?channel=bradgarropy&parent=bradgarropy.com"
                frameborder="0"
                scrolling="no"
                allowfullscreen=""
            >
            </iframe>
        </div>
    `)
})

test("transforms twitch videos", () => {
    const html = twitchTransformer.getHTML(
        "https://twitch.tv/videos/1272889918",
    )

    expect(html).toEqual(`
        <div class="twitch">
            <iframe
                src="https://player.twitch.tv?video=1272889918&parent=bradgarropy.com"
                frameborder="0"
                scrolling="no"
                allowfullscreen=""
            >
            </iframe>
        </div>
    `)
})

test("transforms twitch clips", () => {
    const domainHtml = twitchTransformer.getHTML(
        "https://twitch.tv/bradgarropy/clip/ZealousSpeedyStingrayUnSane",
    )

    expect(domainHtml).toEqual(`
        <div class="twitch">
            <iframe
                src="https://clips.twitch.tv/embed?clip=ZealousSpeedyStingrayUnSane&parent=bradgarropy.com"
                frameborder="0"
                scrolling="no"
                allowfullscreen=""
            >
            </iframe>
        </div>
    `)

    const subdomainHtml = twitchTransformer.getHTML(
        "https://clips.twitch.tv/ZealousSpeedyStingrayUnSane",
    )

    expect(subdomainHtml).toEqual(`
        <div class="twitch">
            <iframe
                src="https://clips.twitch.tv/embed?clip=ZealousSpeedyStingrayUnSane&parent=bradgarropy.com"
                frameborder="0"
                scrolling="no"
                allowfullscreen=""
            >
            </iframe>
        </div>
    `)

    const emptyHtml = twitchTransformer.getHTML("https://twitch.tv")

    // eslint-disable-next-line quotes
    expect(emptyHtml).toEqual('<div class="twitch"></div>')
})
