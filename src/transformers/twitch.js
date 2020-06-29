const name = "custom twitch"

const shouldTransform = url => url.includes("twitch.tv")

const getHTML = () => {
    const type = "channel"
    const id = "bradgarropy"

    const html = `
        <div class="twitch">
            <iframe
                src="https://player.twitch.tv?${type}=${id}&parent=bradgarropy.com"
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
