import {codesandboxTransformer} from "transformers/codesandbox"

test("detects codesandbox links", () => {
    expect(
        codesandboxTransformer.shouldTransform(
            "https://codesandbox.io/s/exciting-pascal-j5hwu",
        ),
    ).toBeTruthy()
})

test("ignores non-codesandbox links", () => {
    expect(
        codesandboxTransformer.shouldTransform("https://example.com"),
    ).toBeFalsy()
})

test("transforms codesandbox links", () => {
    const html = codesandboxTransformer.getHTML(
        "https://codesandbox.io/s/exciting-pascal-j5hwu",
    )

    const node = new DOMParser().parseFromString(html, "text/html")
    const iframe = node.querySelector("iframe")

    expect(iframe.src).toEqual(
        "https://codesandbox.io/embed/exciting-pascal-j5hwu",
    )
})
