---
title: 🔼 next over remix
slug: next-over-remix
date: "2023-04-03"
topic: coding
tags: ["next", "remix"]
---

According to my [2023 goals][goals], my first task of the year was to convert my website to [Remix][remix] and [Tailwind][tailwind]. I completed the [Tailwind conversion][css-modules-to-tailwind] back in February, and the Remix conversion took me just over a month. Here's how it went.

## 🍰 conversion process

Converting from [Next.js][next] to [Remix][remix] was pretty straightforward. I started by swapping out the `next.config.js` for a `remix.config.js`. Then I had to map the `_app.tsx` and `_document.tsx` files to the Remix equivalent `root.tsx` file.

Next I moved all of my `pages` into the `routes` folder and modified the structure slightly. All of the `getStaticProps` calls had to be converted to Remix `loader` functions, and I had to use the Remix `meta` function for SEO information. Then I swapped out the Next `<Link>` component for the Remix one.

Ultimately the [pull request][pull-request] was only a four line difference if you don't count the `package-lock.json` file. Both frameworks were structured in a similar manner, but something about Remix felt simpler.

## 😖 issues

The project wasn't without issues though. The first problem I noticed was that sometimes page transitions weren't loading data correctly. That's because the `loader` functions must be exported inline, rather than at the bottom of the file.

```typescript
export const loader = () => {}
```

The next issue I hit was a very weird one. Once deployed to [Vercel][vercel], I was no longer able to read my local `markdown` files. After some [deep searching][vercel-files], I found that referencing `process.cwd()` does not work the same in Remix as it does in Next.js when hosted on Vercel. The solution was to use `__dirname` to construct paths, so that they can be statically analyzed by the hosting platform.

```typescript
const postsPath = `${__dirname}/../content/posts`
```

Another similar problem I ran into was with [gatsby-remark-vscode][gatsby-remark-vscode] causing build failures. Internally it looks for some other files in nearby directories, which were not in their expected locations because I had told Remix to bundle all server dependencies. Unfortunately I never found a solution to this problem.

But the last issue I ran into was enough to put a stop to the project. Because Remix is an SSR framework, I was sending API requests to fetch my latest YouTube videos on every page load, which depleted my quota and caused me to get rate limited for the rest of the day.

I investigated using cache headers on the request sent from the server and from the browser, but nothing seemed to have any effect. Instead of go further down the caching rabbit hole with something like [Redis][redis], or set up a cron job to pull my latest videos, I decided that it was too much infrastructure for a static site.

## 🏎️ performance

But regardless, I wanted to see how a fully server rended application performed when compared to my existing Next.js site.

|                  | Next.js | Remix   |
| ---------------- | ------: | :------ |
| Requests         |    `52` | `27`    |
| Transferred      | `992kb` | `990kb` |
| Resources        |   `2mb` | `2mb`   |
| Finish           |  `1.2s` | `1.5s`  |
| DOMContentLoaded | `500ms` | `750ms` |
| Load             | `850ms` | `1.2s`  |

Despite the fact that Next.js had many more network requests to fetch neighboring pages, it was faster in nearly every way! The loading experience was identical in both applications, with no noticable differences in layout shift or perceived loading time.

## 🎬 conclusion

Given the issues I ran into, it showed me that [Remix][remix] isn't the right choice for a static blog. While the simplicity and developer experience is amazing, Remix really shines for authenticated web applications. That's why we're using it at [Atlassian][atlassian] for our latest internal tools.

With that being said, I'm going to stick with [Next.js][next] for now. I'm still hosting on [Vercel][vercel], and they go together like peanut butter and jelly. However, I'm still debating on how far I push into the Next.js ecosystem. I recently made an effort to remove the `<Image>` component from my codebase, as it locked me into using Next.js. But their new `@next/font` module is very enticing...

At the end of the day, I should stop rewriting my website and start finishing all of the blog ideas I have!

[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/353
[remix]: https://remix.run
[next]: https://nextjs.org
[vercel-files]: https://www.themosaad.com/blog/loading-static-file-remix-vercel
[goals]: https://bradgarropy.com/blog/goals-for-2023#bradgarropy.com
[tailwind]: https://tailwindcss.com
[css-modules-to-tailwind]: https://bradgarropy.com/blog/css-modules-to-tailwind
[vercel]: https://vercel.com
[gatsby-remark-vscode]: https://github.com/andrewbranch/gatsby-remark-vscode
[redis]: https://redis.com
[atlassian]: https://www.atlassian.com
