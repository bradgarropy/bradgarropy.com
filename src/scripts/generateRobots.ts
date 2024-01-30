import {writeFile} from "node:fs/promises"

const generate = async () => {
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

    await writeFile("public/robots.txt", robots)
}

generate()
