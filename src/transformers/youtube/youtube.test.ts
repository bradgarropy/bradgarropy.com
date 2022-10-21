import {youtubeTransformer} from "transformers/youtube"
import {expect, test} from "vitest"

test.concurrent("detects youtube links", () => {
    expect(
        youtubeTransformer.shouldTransform("https://youtu.be/9zcU6oUOHVc"),
    ).toBeTruthy()
})

test.concurrent("ignores non-youtube links", () => {
    expect(
        youtubeTransformer.shouldTransform("https://example.com"),
    ).toBeFalsy()
})

test.concurrent("transforms youtube links", () => {
    const html = youtubeTransformer.getHTML("https://youtu.be/9zcU6oUOHVc")

    expect(html).toEqual(`
        <div class="youtube">
            <iframe
                title="9zcU6oUOHVc"
                src="https://www.youtube-nocookie.com/embed/9zcU6oUOHVc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </iframe>
        </div>
    `)
})

test.concurrent("transforms youtube links with start", () => {
    const html = youtubeTransformer.getHTML("https://youtu.be/9zcU6oUOHVc?t=3")

    expect(html).toEqual(`
        <div class="youtube">
            <iframe
                title="9zcU6oUOHVc"
                src="https://www.youtube-nocookie.com/embed/9zcU6oUOHVc?start=3"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </iframe>
        </div>
    `)
})
