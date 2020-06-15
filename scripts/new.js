// npm run new [title] [topic]

const fs = require("fs")
const slugify = require("slugify")
const {format} = require("date-fns")

const [title = "🆕 new post", topic = "coding"] = process.argv.slice(2)
const slug = slugify(title)
const date = format(Date.now(), "yyyy-MM-dd")
let icon

switch (topic) {
    case "coding":
        icon = "💻"
        break

    case "life":
        icon = "😎"
        break
    case "tech":
        icon = "🔌"
        break
}

const frontmatter = `---
title: ${title}
slug: ${slug}
date: ${date}
topic:
    name: ${topic}
    icon: ${icon}
---

TODO`

const basePath = "content/posts"
const postPath = `${basePath}/${slug}`

fs.mkdirSync(postPath)
fs.writeFileSync(`${postPath}/index.md`, frontmatter)
