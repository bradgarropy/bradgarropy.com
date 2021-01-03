const fetchOEmbedData = async url => {
    const data = await fetch(url)
    const json = await data.json()

    return json
}

const includesSomeOfArray = (string, array) => {
    return array.some(item => string.includes(item))
}

const name = "Twitter"

const shouldTransform = url => {
    const {host, pathname} = new URL(url)

    return (
        ["twitter.com", "www.twitter.com"].includes(host) &&
        (pathname.includes("/status/") ||
            (includesSomeOfArray(pathname, [
                "/events/",
                "/moments/",
                "/timelines/",
            ]) &&
                !pathname.includes("/edit/")))
    )
}

const getHTML = async url => {
    const twitterUrl = url.replace("events", "moments")

    const data = await fetchOEmbedData(
        `https://publish.twitter.com/oembed?url=${twitterUrl}&dnt=true&omit_script=true`,
    )

    const html = [data.html]
        .map(s => s.replace(/\?ref_src=twsrc.*?fw/g, ""))
        .map(s => s.replace(/<br>/g, "<br />"))
        .join("")
        .trim()

    return html
}

export default {name, shouldTransform, getHTML}
