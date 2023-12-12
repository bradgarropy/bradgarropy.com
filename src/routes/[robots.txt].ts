export const loader = async () => {
    const robots = `
        User-agent: Googlebot
        Disallow: /nogooglebot/

        User-agent: *
        Allow: /

        Sitemap: https://bradgarropy.com/sitemap.xml
    `
        .trim()
        .split("\n")
        .map(line => line.trim())
        .join("\n")

    const response = new Response(robots, {
        status: 200,
        headers: {
            "content-type": "text/plain",
        },
    })

    return response
}
