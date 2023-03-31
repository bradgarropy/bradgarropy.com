---
title: 🔼 next over remix
slug: next-over-remix
date: "2023-03-31"
topic: coding
---

According to my [2023 goals][goals], my first task of the year was to convert my website to [Remix][remix] and [Tailwind][tailwind]. I completed the [Tailwind conversion][css-modules-to-tailwind] back in February, and the Remix conversion took me just over a month. Here's how it went.

## 🍰 conversion process

-   change link import
-   move pages to routes
-   map \_app and \_document to remix concepts (root)
-   same amount of lines
-   mocking was straightforward

## 😖 issues

-   loader exports
-   gatsby remark vscode plugin
-   markdown file references
-   code highlighting not working
-   youtube api

## 🏎️ performance

-   remix

    -   27 requests
    -   990kb xferred
    -   2mb resources
    -   finish 1.5
    -   dom 750ms
    -   load 1.2s
    -   100/97/92/82 lighthouse

-   next

    -   52 requests
    -   992kb xferred
    -   2mb resources
    -   finish 1.2
    -   dom 500ms
    -   load 850ms
    -   100/98/92/90 lighthouse

## 🎬 conclusion

-   remix is still my top picks for apps
-   using it at work
-   stick with next
-   host on vercel
-   debating on how far i push into next ecosystem
-   just removed next/image
-   pair well together
-   should stop rewriting my blog
-   instead should write all the posts i have drafted

[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/353
[remix]: https://remix.run
[next]: https://nextjs.org
[vercel-files]: https://www.themosaad.com/blog/loading-static-file-remix-vercel
[goals]: https://bradgarropy.com/blog/goals-for-2023#bradgarropy.com
[tailwind]: https://tailwindcss.com
[css-modules-to-tailwind]: https://bradgarropy.com/blog/css-modules-to-tailwind
