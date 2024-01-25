import {parseISO} from "date-fns"
import {Feed} from "feed"

import {createImageUrl} from "~/utils/cloudinary"
import {getAllPosts} from "~/utils/posts"

type FeedType = "xml" | "json"

const generateFeed = (type: FeedType) => {
    const feed = new Feed({
        title: "bradgarropy.com",
        id: "https://bradgarropy.com",
        link: "https://bradgarropy.com",
        language: "en",
        image: createImageUrl("/social/facebook.png"),
        favicon: createImageUrl("/site/favicon.ico"),
        copyright: `© ${new Date().getFullYear()} Brad Garropy`,
        feedLinks: {
            rss: "https://bradgarropy.com/feed.xml",
            json: "https://bradgarropy.com/feed.json",
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
            copyright: `© ${new Date().getFullYear()} Brad Garropy`,
            date: parseISO(post.date),
            id: post.slug,
            link: `https://bradgarropy.com/blog/${post.slug}`,
            published: parseISO(post.date),
            title: post.title,
        })
    })

    switch (type) {
        case "xml":
            return feed.rss2()
        case "json":
            return feed.json1()
    }
}

export {generateFeed}
