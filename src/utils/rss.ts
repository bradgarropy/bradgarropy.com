import {parseISO} from "date-fns"
import {Feed} from "feed"
import {mkdirSync, rmSync, writeFileSync} from "fs"
import {getAllPosts} from "utils/posts"

const generateRss = () => {
    const feed = new Feed({
        title: "Feed Title",
        description: "This is my personal feed!",
        id: "http://bradgarropy.com/",
        link: "http://bradgarropy.com/",
        language: "en",
        image: "http://bradgarropy.com/image.png",
        favicon: "http://bradgarropy.com/favicon.ico",
        copyright: `© ${new Date().getFullYear()} Brad Garropy`,
        feedLinks: {
            atom: "https://bradgarropy.com/feeds/atom.xml",
            rss: "https://bradgarropy.com/feeds/rss.xml",
            json: "https://bradgarropy.com/feeds/feed.json",
        },
        author: {
            name: "Brad Garropy",
            email: "bradgarropy@gmail.com",
            link: "https://twitter.com/bradgarropy",
        },
    })

    const posts = getAllPosts()

    posts.forEach(post => {
        feed.addItem({
            author: [
                {
                    name: "Brad Garropy",
                    email: "bradgarropy@gmail.com",
                    link: "https://twitter.com/bradgarropy",
                },
            ],
            content: null,
            contributor: [],
            copyright: `© ${new Date().getFullYear()} Brad Garropy`,
            date: parseISO(post.date),
            description: null,
            id: post.slug,
            image: null,
            link: `https://bradgarropy.com/blog/${post.slug}`,
            published: parseISO(post.date),
            title: post.title,
        })
    })

    rmSync("./public/feeds", {recursive: true})
    mkdirSync("./public/feeds", {recursive: true})

    writeFileSync("./public/feeds/rss.xml", feed.rss2())
    writeFileSync("./public/feeds/feed.json", feed.json1())
    writeFileSync("./public/feeds/atom.xml", feed.atom1())
}

export {generateRss}
