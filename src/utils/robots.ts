const generateRobots = () => {
    const robots = `
            User-agent: Googlebot
            Disallow: /nogooglebot/

            User-agent: *
            Allow: /

            Sitemap: https://bradgarropy.com/sitemap.txt
        `
        .trim()
        .split("\n")
        .map(line => line.trim())
        .join("\n")

    return robots
}

export {generateRobots}
