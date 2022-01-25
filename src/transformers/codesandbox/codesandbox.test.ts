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

    expect(html).toEqual(`
        <div class="codesandbox">
            <iframe
                src="https://codesandbox.io/embed/exciting-pascal-j5hwu"
                frameBorder="0"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            >
            </iframe>
        </div>
    `)
})
