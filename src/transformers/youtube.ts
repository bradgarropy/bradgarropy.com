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
        <div class="youtube">
            <iframe
                title="${id}"
                src="${src}"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
    `

    return html
}

const youtubeTransformer = {
    name: "youtubeTransformer",
    shouldTransform,
    getHTML,
}

export {youtubeTransformer}
