const shouldTransform = (url: string): boolean => {
    return url.includes("twitch.tv")
}

const getHTML = (string: string): string => {
    const {pathname} = new URL(string)
    const paths = pathname.split("/").filter(e => e)
    const length = paths.length
    const id = paths[length - 1]

    let src

    if (isChannel(string)) {
        src = `https://player.twitch.tv?channel=${id}`
    } else if (isVideo(string)) {
        src = `https://player.twitch.tv?video=${id}`
    } else if (isClip(string)) {
        src = `https://clips.twitch.tv/embed?clip=${id}`
    } else {
        // eslint-disable-next-line quotes
        const html = '<div class="twitch"></div>'
        return html
    }

    const html = `
        <iframe
            class="aspect-video w-full rounded-[0.3rem] my-8"
            src="${src}&parent=bradgarropy.com"
            frameborder="0"
            scrolling="no"
            allowfullscreen
        >
        </iframe>
    `

    return html
}

// example: https://twitch.tv/bradgarropy
const isChannel = (url: string): boolean => {
    const regex = new RegExp(/^https?:\/\/(www.)?twitch.tv\/\w*$/)
    const isChannel = regex.test(url)
    return isChannel
}

// example: https://twitch.tv/videos/1272889918
const isVideo = (url: string): boolean => {
    const regex = new RegExp(/^https?:\/\/(www.)?twitch.tv\/videos\/\w*$/)
    const isVideo = regex.test(url)
    return isVideo
}

// example: https://clips.twitch.tv/ZealousSpeedyStingrayUnSane
// example: https://twitch.tv/bradgarropy/clip/ZealousSpeedyStingrayUnSane
const isClip = (url: string): boolean => {
    const domainRegex = new RegExp(
        /^https?:\/\/(www.)?twitch.tv\/\w*\/clip\/\w*$/,
    )

    const subdomainRegex = new RegExp(
        /^https?:\/\/(www.)?clips.twitch.tv\/\w*$/,
    )

    const isClip = domainRegex.test(url) || subdomainRegex.test(url)
    return isClip
}

const twitchTransformer = {
    name: "twitchTransformer",
    shouldTransform,
    getHTML,
}

export {twitchTransformer}
