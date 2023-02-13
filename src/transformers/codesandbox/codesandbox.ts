const shouldTransform = (url: string): boolean => {
    return url.includes("codesandbox.io")
}

const getHTML = (string: string): string => {
    const src = string.replace("/s/", "/embed/")

    const html = `
        <iframe
            class="aspect-video w-full rounded-[0.3rem] my-8 h-[500px]"
            src="${src}"
            frameborder="0"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        >
        </iframe>
    `

    return html
}

const codesandboxTransformer = {
    name: "codesandboxTransformer",
    shouldTransform,
    getHTML,
}

export {codesandboxTransformer}
