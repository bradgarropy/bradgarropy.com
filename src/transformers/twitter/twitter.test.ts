import {expect, test} from "vitest"

import {twitterTransformer} from "~/transformers/twitter"

test("detects twitter links", () => {
    expect(
        twitterTransformer.shouldTransform(
            "https://twitter.com/bradgarropy/status/1458449938157801490",
        ),
    ).toBeTruthy()
})

test("ignores non-twitter links", () => {
    expect(
        twitterTransformer.shouldTransform("https://example.com"),
    ).toBeFalsy()
})

test("transforms twitter links", async () => {
    const html = await twitterTransformer.getHTML(
        "https://twitter.com/bradgarropy/status/1458449938157801490",
    )

    expect(html).toEqual(
        expect.stringContaining('<div class="grid justify-center">'),
    )

    expect(html).toEqual(
        expect.stringContaining('<blockquote class="twitter-tweet">'),
    )

    expect(html).toEqual(
        expect.stringContaining(
            '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
        ),
    )
})
