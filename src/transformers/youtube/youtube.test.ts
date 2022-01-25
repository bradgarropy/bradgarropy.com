import {youtubeTransformer} from "transformers/youtube"

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

    expect(html).toEqual(`
        <div class="youtube">
            <iframe
                title="9zcU6oUOHVc"
                src="https://www.youtube-nocookie.com/embed/9zcU6oUOHVc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
    `)
})

test("transforms youtube links with start", () => {
    const html = youtubeTransformer.getHTML("https://youtu.be/9zcU6oUOHVc?t=3")

    expect(html).toEqual(`
        <div class="youtube">
            <iframe
                title="9zcU6oUOHVc"
                src="https://www.youtube-nocookie.com/embed/9zcU6oUOHVc?start=3"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
    `)
})
