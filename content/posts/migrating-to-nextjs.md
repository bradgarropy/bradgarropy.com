---
title: ⏭ migrating to nextjs
slug: migrating-to-nextjs
date: "2022-02-02"
topic:
    name: coding
    icon: 💻
---

I've attempted to migrate this site from [Gatsby][gatsby] to [Next.js][next] three times now, and have always called it quits for [one reason or another][gatsby-vs-nextjs]. Some reasons were legitimate, like how the Next.js development server just feels slower than the Gatsby development server. Other reasons were more personal, like how difficult the Markdown parsing was. But at the end of the day, on the fourth attempt, I said _screw it_ and merged the `nextjs` branch into `master` and didn't look back.

YOUTUBE VIDEO HERE

I made this decision so abruptly because I feel like Next.js just is the right way to go. It provides more control over my codebase because it doesn't rely so heavily on plugins like Gatsby. Anytime I ran into a problem with Gatsby, I felt like I had to bug a plugin maintainer instead of fixing it myself. With Next.js, I was forced to write all of the functionality myself from the start. So I learned a lot during the migration, especially around Markdown parsing.

And I couldn't have done it without [@crutchcorn][crutchcorn], who was a few steps ahead of me in his migration of [Unicorn Utterances][unicorn-utterances] to Next.js. I constantly reached out to him about how he approached things like testing, styling, analytics, and especially Markdown parsing.

Ultimately, the [pull request][pr] looked something like this. That's a reduction of 55k lines of code! And so much of that was Gatsby specific. During the rewrite I transitioned to [Google Analytics 4][ga4], improved my CSS, and added [TypeScript][typescript] to my serverless functions.

![diff][diff]

Since I launched the rewrite I fixed a few bugs, refactored some CSS, and added error reporting with [Sentry][sentry]. What I'm most looking forward to is extracting some parts of the code into `npm` packages that I can use in other projects, like the Markdown parsing chain and the Google Analytics 4 integration.

My personal website is my playground, and it should always represent the latest technology that I'm using. I plan on using Next.js on all of the [SaaS products][saas] I build this year, so the migration was a natural step forward to align on my future technology choices.

[gatsby]: https://gatsbyjs.com
[next]: https://nextjs.org
[gatsby-vs-nextjs]: /blog/gatsby-vs-nextjs-markdown-blog
[crutchcorn]: https://twitter.com/crutchcorn
[unicorn-utterances]: https://unicorn-utterances.com
[pr]: https://github.com/bradgarropy/bradgarropy.com/pull/265
[ga4]: https://analytics.google.com
[typescript]: https://typescriptlang.org
[diff]: /images/posts/pr-diff.png
[sentry]: https://sentry.io
[saas]: /blog/goals-for-2022#products
