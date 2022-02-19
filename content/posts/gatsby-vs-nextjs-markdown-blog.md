---
title: "🥊 gatsby vs next.js: markdown blog"
slug: gatsby-vs-nextjs-markdown-blog
date: "2021-01-21"
topic: coding
---

Lately [Next.js][nextjs] has been gaining a lot of steam, and I've been looking for an opportunity to give it a real shot. This website has been a [Gatsby][gatsby] website since its inception, so I created a [branch][branch] and began the conversion process. The conversion is now finished, and it's time to reflect, evaluate, and make up my mind.

## 🟣 gatsby code

At first I was [loving][initial-tweet] hacking away so much Gatsby specific code. I removed every `gatsby-*` package, got rid of all the `graphql`, and deleted the `gatsby-config.js` file with a smile. All that proprietary code was replaced with plain old `node` functions.

![diff][diff]

By the end of it all I was definitely net negative, but I also had to add my fair share of code. My diff was nowhere near as impressive as [Lee Robinson][leerob]'s when he converted the [gatsby-starter-blog to Next.js][conversion].

## 👨🏼‍💻 development environment

Once I had things up and running, I started to notice that the Next.js development server seemed slow. I realized that Next.js operates in a very different way than Gatsby.

| Platform | Operation | Time       |
| :------- | :-------- | :--------- |
| Gatsby   | `start`   | 24 seconds |
| Gatsby   | `build`   | 27 seconds |
| Next.js  | `start`   | 7 seconds  |
| Next.js  | `build`   | 19 seconds |

While these numbers suggest that Next.js is faster by all accounts, the development server didn't feel that way. I believe this is because Gatsby does all the work up front, whereas Next.js builds its pages on the fly.

I much preferred Gatsby's slow start for a fast runtime, as I usually only start the server once, but navigate pages constantly while working on the site. Luckily, both sites were _blazing fast_ once built and deployed.

## 🔻 markdown support

Markdown parsing and transformation is key when creating a blog. I usually rely on Gatsby's [plugin ecosystem][gatsby-plugins] to handle all that for me, but with Next.js I was on my own. I had to become an expert at [remark][remark] and its plugins in order to get the transformations I wanted. I even had to [fix a bug][bug] in one of the libraries!

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

I still can't figure out how to highlight specific lines in code blocks. The icon next to linked headers is not showing up. I had to write custom transformers for every media embed. I lost the ability to use `vscode` themes for syntax highlighting.

These are necessary features in a developer blog, and these are the types of things that the `gatsby-remark-*` plugins provide for you

## 🖼️ image component

What really sparked me to try Next.js was the announcement of their [image component][next-image].

Just like their development server, Next.js optimizes images on the fly to prevent long build times. Although the Next.js `<Image/>` component does prevent [layout shift][cls], it still feels like the image just pops in. That's why I prefer the blur up effect of Gatsby images.

But the worst thing about Next.js images is that they can't be used inside of Markdown files without writing a custom `remark` transformer. With Gatsby, getting optimized images from Markdown files is as simple as installing [gatsby-remark-images][gatsby-remark-images].

This is yet another example of how the Gatsby plugin ecosystem has an answer for everything, especially when it comes to Markdown.

## 📚 content location

I really enjoy keeping my blog posts and their associated images in the same directory. With Next.js, all images referenced in Markdown must be stored in the `/public` directory. This provides more friction when authoring a blog post, and would make things more difficult if I ever wanted to move my content elsewhere in the future.

## 👨🏼‍⚖️ the verdict

_Remember, I'm evaluating these two frameworks in the context of a Markdown blog. My criteria would change if I were evaluating them for a web application._

I didn't talk about things like hosting, TypeScript support, MDX support, testing, redirects, or serverless functions. But I found that [Gatsby][gatsby] and [Next.js][nextjs] compare similarly on those fronts.

Ultimately I chose the tool that felt like it was made specifically for Markdown blogging, the tool that offers plugins to do exactly what I want, and the tool that popularized static sites on the [Jamstack][jamstack].

**I stuck with Gatsby.**

[jamstack]: https://jamstack.org
[gatsby-remark-images]: https://www.gatsbyjs.com/plugins/gatsby-remark-images
[cls]: https://web.dev/cls
[gatsby-image]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-image
[next-image]: https://nextjs.org/docs/basic-features/image-optimization
[bug]: https://twitter.com/bradgarropy/status/1345903752314761218
[remark-plugins]: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
[remark]: https://github.com/remarkjs/remark
[gatsby-plugins]: https://www.gatsbyjs.com/plugins
[conversion]: https://github.com/leerob/gatsby-to-nextjs
[leerob]: https://twitter.com/leeerob
[diff]: /images/posts/diff.png
[initial-tweet]: https://twitter.com/bradgarropy/status/1343788025684357122
[branch]: https://github.com/bradgarropy/bradgarropy.com/tree/next
[gatsby]: https://gatsbyjs.com
[nextjs]: https://nextjs.org
