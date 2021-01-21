---
title: "🥊 gatsby vs nextjs: markdown blog"
slug: gatsby-vs-nextjs-markdown-blog
date: 2021-01-18
topic:
    name: coding
    icon: 💻
---

Lately [Next.js][nextjs] has been gaining a lot of steam, and I've been looking for an opportunity to give it a real shot. This website has been a [Gatsby][gatsby] website since its inception, so I created a [branch][branch] and began the conversion process. The conversion is now finished, and it's time to reflect, evaluate, and make up my mind.

## 🟣 gatsby code

At first I was [loving][initial-tweet] hacking away so much Gatsby specific code. I removed every `gatsby-*` package, got rid of all the `graphql`, and deleted the `gatsby-config.js` file with a smile. All that proprietary code was replaced with plain old `node` functions.

![diff][diff]

By the end of it all I was definitely net negative, but I also had to add my fair share of code. My diff was nowhere near as impressive as [Lee Robinson][leerob]'s when he converted the [gatsby-starter-blog to Next.js][conversion].

## 👨🏼‍💻 development environment

Once I had things up and running, I started to realize that the Next.js development server seemed very slow. I began to realize that Next.js operates in a very different way than Gatsby.

| Platform | Operation | Time       |
| :------- | :-------- | :--------- |
| Gatsby   | `start`   | 24 seconds |
| Gatsby   | `build`   | 27 seconds |
| Next.js  | `start`   | 7 seconds  |
| Next.js  | `build`   | 19 seconds |

While these numbers suggest that Next.js is faster by all accounts, the development server didn't feel that way. I believe this is because Gatsby does all the work up front, whereas Next.js builds its pages on the fly.

I much preferred Gatsby's slow start for a fast runtime, as I usually only start the server once, but navigate pages constantly while working on the site. Luckily, both sites were _blazing fast_ once built and deployed.

## 🔻 markdown support

Markdown parsing and transformation is key when creating a blog. I was used to relying on Gatsby's [plugin ecosystem][gatsby-plugins] to handle all that for me, but with Next.js I was on my own. I had to become an expert at [remark][remark] and its plugins in order to get the transformations I wanted. I even had to [fix a bug][bug] in one of the libraries!

-   GitHub Flavored Markdown
-   Linked headings
-   Media embeds
-   Code highlighting
-   External links open in new tab

In order to accomplish this I dug deep into the list of [remark plugins][remark-plugins], and leveraged a few of them to create my own `parseMarkdown` function. Even though it's only twenty lines of code, this simple function took a lot of investment to create, and it's still not perfect.

```javascript
const parseMarkdown = async file => {
    const {data, content} = matter(file)

    const html = await remark()
        .use(remarkGFM)
        .use(remarkSlug)
        .use(remarkAutolinkHeadings)
        .use(remarkExternalLinks)
        .use(remarkEmbedder, {
            transformers: [codesandbox, twitch, twitter, youtube],
        })
        .use(remarkPrism, {transformInlineCode: true})
        .use(remarkHTML)
        .process(content)

    const markdown = {
        frontmatter: data,
        html: html.toString(),
    }

    return markdown
}
```

I still can't figure out how to highlight specific lines in code blocks. The link icon next to headers is not showing up. I had to write custom transformers for every media embed. I lost the ability to use `vscode` themes for syntax highlighting.

These are the types of things that all of the `gatsby-remark-*` plugins provide for you.

## 🖼️ image component

What really sparked me to try Next.js was the announcement of their [Image component][next-image].

Just like their development server, Next.js optimizes images on the fly to prevent long build times. Although the Next.js `<Image/>` component does prevent [layout shift][cls], it still feels like the image just pops in. That's why I prefer the blur up effect of Gatsby images.

But the worst thing about Next.js images is that they can't be used inside of `markdown` files without writing a custom `remark` transformer...... more stuff here...... This is yet another example how the Gatsby plugin ecosystem has an answer for everything.

## 📚 content location

content colocation

## 👨🏼‍⚖️ the verdict

chose gatsby

[cls]: https://web.dev/cls
[gatsby-image]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-image
[next-image]: https://nextjs.org/docs/basic-features/image-optimization
[bug]: https://twitter.com/bradgarropy/status/1345903752314761218
[remark-plugins]: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
[remark]: https://github.com/remarkjs/remark
[gatsby-plugins]: https://www.gatsbyjs.com/plugins
[conversion]: https://github.com/leerob/gatsby-to-nextjs
[leerob]: https://twitter.com/leeerob
[diff]: images/diff.png
[initial-tweet]: https://twitter.com/bradgarropy/status/1343788025684357122
[branch]: https://github.com/bradgarropy/bradgarropy.com/tree/next
[gatsby]: https://gatsbyjs.com
[nextjs]: https://nextjs.org
