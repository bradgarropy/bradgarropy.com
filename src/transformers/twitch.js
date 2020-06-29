const name = "custom twitch"

const shouldTransform = url => url.includes("twitch.tv")

const getHTML = string => {
    const {pathname} = new URL(string)
    const paths = pathname.split("/").filter(e => e)
    const length = paths.length
    const id = paths[length - 1]

    let src

    switch (length) {
        case 1:
            src = `https://player.twitch.tv?channel=${id}`
            break
        case 2:
            src = `https://player.twitch.tv?video=${id}`
            break
        case 3:
            src = `https://clips.twitch.tv/embed?clip=${id}`
            break
    }

    const html = `
        <div class="twitch">
            <iframe
                src="${src}&parent=bradgarropy.com"
                frameborder="0"
                scrolling="no"
                allowfullscreen=""
            >
            </iframe>
        </div>
    `

    return html
}

module.exports = {name, shouldTransform, getHTML}
