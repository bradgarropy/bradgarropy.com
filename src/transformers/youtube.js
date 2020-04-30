const name = "custom youtube"

const shouldTransform = url => url.includes("youtu.be")

const getHTML = string => {
    const url = new URL(string)
    const id = url.pathname.slice(1)

    const html = `
        <div class="youtube">
            <iframe
                title=${id}
                src="https://www.youtube-nocookie.com/embed/${id}"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
    `

    return html
}

module.exports = {name, shouldTransform, getHTML}
