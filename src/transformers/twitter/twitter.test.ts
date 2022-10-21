import {twitterTransformer} from "transformers/twitter"
import {expect, test} from "vitest"

test.concurrent("detects twitter links", () => {
    expect(
        twitterTransformer.shouldTransform(
            "https://twitter.com/bradgarropy/status/1458449938157801490",
        ),
    ).toBeTruthy()
})

test.concurrent("ignores non-twitter links", () => {
    expect(
        twitterTransformer.shouldTransform("https://example.com"),
    ).toBeFalsy()
})

test.concurrent("transforms twitter links", async () => {
    const html = await twitterTransformer.getHTML(
        "https://twitter.com/bradgarropy/status/1458449938157801490",
    )

    // eslint-disable-next-line quotes
    expect(html).toEqual(expect.stringContaining('<div class="twitter">'))

    expect(html).toEqual(
        // eslint-disable-next-line quotes
        expect.stringContaining('<blockquote class="twitter-tweet">'),
    )

    expect(html).toEqual(
        expect.stringContaining(
            // eslint-disable-next-line quotes
            '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
        ),
    )
})
