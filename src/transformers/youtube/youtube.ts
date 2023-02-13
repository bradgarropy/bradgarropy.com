const shouldTransform = (url: string): boolean => {
    return url.includes("youtu.be")
}

const getHTML = (string: string): string => {
    const {pathname, searchParams} = new URL(string)
    const id = pathname.slice(1)
    const start = searchParams.get("t")

    let src = `https://www.youtube-nocookie.com/embed/${id}`

    if (start) {
        src = `${src}?start=${start}`
    }

    const html = `
        <iframe
            class="aspect-video w-full rounded-[0.3rem] my-8"
            title="${id}"
            src="${src}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>
    `

    return html
}

const youtubeTransformer = {
    name: "youtubeTransformer",
    shouldTransform,
    getHTML,
}

export {youtubeTransformer}
