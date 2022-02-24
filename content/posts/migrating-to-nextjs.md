---
title: 🦆 migrating to next.js
slug: migrating-to-nextjs
date: "2022-02-08"
topic: coding
---

I've attempted to migrate this site from [Gatsby][gatsby] to [Next.js][next] three times now, and have always called it quits for [one reason or another][gatsby-vs-nextjs]. Some reasons were backed by data, others were just a gut feeling. At the end of the day, on the fourth attempt, I decided to stop sitting on the fence, and merged the `nextjs` branch into `master`.

I want this post to highlight some of the tradeoffs around making the switch, while not analyzing the numbers too much. At the end of the day, it's a feeling I have that this is the right direction for the site. That's the thing about tradeoffs, there's no such thing as a clear winner.

https://youtu.be/IvubvZ9XUAo

## 💜 open source

All of the code for this website is [open source][repo], where you can find the [pull request][pr] that implemented the migration. It was a big one. Most importantly though, it was a net negative by around 55k lines.

![diff][diff]

I was able to rip out so much Gatsby specific code, like plugins, GraphQL queries, and data hooks. In the following sections, you'll see how wide the impact of the Gatsby [plugin ecosystem][plugins] was on the code base. In some cases it was a great help, but when I encountered bugs or wanted more flexibility, it felt like a black box that I couldn't crack open.

## 💾 data sourcing

The primary difference between Gatsby and Next.js for a content site is how you source data. In my case, I pull data from local Markdown files, [Captivate][captivate], [GitHub][github] and [YouTube][youtube]. Gatsby had plugins for all of these, but I had to write my own for Next.js. This was actually very simple, and I liked the control and flexibility I had over my data.

```typescript
const getPostBySlug = async (slug: PostFrontmatter["slug"]): Promise<Post> => {
    const postPath = path.join(process.cwd(), `content/posts/${slug}.md`)

    const file = matter.read(postPath)
    const html = await transformMarkdown(file.content)

    const post: Post = {
        html,
        frontmatter: file.data as PostFrontmatter,
    }

    return post
}
```

Above is an example of a helper method I created to grab a single `post`. Yep, just a few file system calls in about ten lines of code! Once you have this data it doesn't get stuffed into a complex and unnecessary [GraphQL data layer][gatsby-graphql]. Instead, Next.js passes it directly to the relevant page component as `props`.

```typescript
const getStaticProps: GetStaticProps = async context => {
    const slug = context.params.slug as PostFrontmatter["slug"]
    const post = await getPostBySlug(slug)

    return {
        props: {
            post,
        },
    }
}
```

## 🔻 markdown parsing

When using local Markdown to store blog posts, it's up to your application to transform it into HTML, or even React components, to be used in your site. Gatsby made this so easy with its plugins, but Next.js leaves this process completely up to the developer. As it turns out, parsing and transforming Markdown is a [huge rabbit hole][unified].

My Markdown parsing solution entails parsing Markdown to HTML on the server (`transformMarkdown`), and then parsing HTML to React on the client (`useMarkdown`). They each handle different parts of the transformation.

-   [Server][transform-markdown]
    -   Embedding videos, tweets, streams, etc.
    -   Syntax highlighting
    -   Linking to external sites
-   [Client][use-markdown]
    -   Next `<Link>` components
    -   Next `<Image>` components

## 🟦 typescript support

But one area that was much easier was [TypeScript support][next-typescript] in Next.js. While they both claim support out of the box, Next.js did a much better job of making TypeScript _just work_ everywhere. For instance, Next.js exports types like `NextApiHandler` from the library that enabled me to use TypeScript in my API routes without any additional setup.

## 🃏 jest setup

Another thing that became super simple was my [Jest][jest] setup. Because Next.js is less involved in your application code than Gatsby, I had no reason to mock out the framework. My setup file went from fifty lines of mocking Gatsby and its components down to just one line.

```typescript
import "@testing-library/jest-dom"
```

While working in Gatsby, I had a bunch of hooks for data fetching that relied on `useStaticQuery`. To test these hooks I had to mock out the complex GraphQL responses for each piece of data. Because Next.js allows me to use regular file system and network APIs, I was able to remove all of those complex mocks and replace them with simpler mocks that return plain JSON objects.

## 👨🏼‍💻 development server

At the end of the day, developer experience is very important to me, but I have to say that I think the Next.js development server feels slower than Gatsby. Although it starts up almost instantaneously, the Next.js server builds pages on demand, which makes clicking around your site very slow.

But normally I'm not clicking around my site, I'm usually sitting on one page writing a blog post. Next.js is a bit frustrating here as well beacuse out of the box it doesn't hot reload when changes to the file system are made (although I think [it's possible][next-remote-watch]). It also seems to load the `<Image>` components at an alarmingly slow pace.

## 🛠 build times

On the upside, my production builds have gotten much faster. Building my Gatsby site on [Netlify][netlify] was averaging 3-4 minutes, while building Next.js on [Vercel][vercel] is only taking _60-90 seconds_. Not to mention, hosting on Vercel gives me other cool stuff like [Web Vitals][web-vitals] analytics and _6000 build minutes_ for free.

![build times][build-times]

## 🙏🏼 thank you

This was a big rewrite, and there was a lot I had to learn to get this done. Thankfully [@crutchcorn][crutchcorn] was a few steps ahead of me in his migration of [Unicorn Utterances][unicorn-utterances] to Next.js. He answered a ton of questions from me in Discord and even hopped on a few [Twitch streams][twitch] with me to talk through any roadblocks. I couldn't have done it without you, thanks man!

## 👍🏼 conclusion

Like I said at the beginning, this migration is a tradeoff, but I think I'm making the right choice. My personal website is my playground, and it should always represent the latest technology that I'm using. I also believe that Vercel is heading in the right direction as a company, and won't leave Next.js behind as the company grows. I plan on using Next.js on all of the [SaaS products][saas] I build this year, so this was a natural step forward to align on my future technology choices.

[gatsby]: https://gatsbyjs.com
[next]: https://nextjs.org
[gatsby-vs-nextjs]: https://bradgarropy.com/blog/gatsby-vs-nextjs-markdown-blog
[crutchcorn]: https://twitter.com/crutchcorn
[unicorn-utterances]: https://unicorn-utterances.com
[pr]: https://github.com/bradgarropy/bradgarropy.com/pull/265
[ga4]: https://analytics.google.com
[typescript]: https://typescriptlang.org
[diff]: /images/posts/pr-diff.png
[sentry]: https://sentry.io
[saas]: https://bradgarropy.com/blog/goals-for-2022#products
[repo]: https://github.com/bradgarropy/bradgarropy.com
[use-markdown]: https://github.com/bradgarropy/bradgarropy.com/blob/master/src/hooks/useMarkdown/useMarkdown.tsx
[transform-markdown]: https://github.com/bradgarropy/bradgarropy.com/blob/master/src/utils/markdown.ts#L36
[next-remote-watch]: https://github.com/hashicorp/next-remote-watch
[plugins]: https://gatsbyjs.com/plugins
[captivate]: https://webdevweekly.captivate.fm
[github]: http://github.com/bradgarropy
[youtube]: https://youtube.com/bradgarropy
[gatsby-graphql]: https://gatsbyjs.com/docs/graphql
[unified]: https://unifiedjs.com
[next-typescript]: https://nextjs.org/docs/basic-features/typescript
[netlify]: https://netlify.com
[vercel]: https://vercel.com
[web-vitals]: https://vercel.com/docs/concepts/analytics/web-vitals
[twitch]: https://twitch.tv/bradgarropy
[jest]: https://jestjs.io
[build-times]: /images/posts/vercel-build-times.png
