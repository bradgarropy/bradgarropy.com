---
title: ▲ netlify to vercel
slug: netlify-to-vercel
date: "2021-12-13"
topic: coding
---

After running out of build minutes on [Netlify][netlify], and considering moving this site to [Next.js][next] for so long, I decided to give [Vercel][vercel] a shot for hosting my portfolio. The process turned out to be very simple, and now I've got this [Gatsby][gatsby] site deployed on both Netlify and Vercel.

Here's the merged [pull request][pr], but I'll describe each step, then compare the two hosts at the end.

## ⚡ serverless functions

The biggest change was to my serverless functions. Netlify expected them to be in the `functions` directory, and Vercel wants them to be in the `api` directory with a `default` export.

The function signature is also a bit different. Vercel uses `request` and `response` objects as inputs, which mirror the [Express][express] API. I prefer this to Netlify's `event` input, which is the same as AWS Lambda functions. Vercel also provides some really nice [helper methods][helpers] for dealing with the `request` body and sending different types of responses.

```typescript
import {VercelRequest, VercelResponse} from "@vercel/node"

const handler = async (req: VercelRequest, res: VercelResponse) => {
    res.status(200).json({})
}

export default handler
```

And bonus, Vercel supports [TypeScript][typescript] out of the box!

## ⤴️ redirects

I never liked Netlify's options for [configuring redirects][netlify-redirects]. The `toml` file seemed like an odd choice, and the `_redirects` file felt very non-standard. Thankfully, Vercel has an easy to understand `json` file to [customize redirects][vercel-redirects].

```json
{
    "redirects": [
        {
            "source": "/sponsor",
            "destination": "https://github.com/sponsors/bradgarropy",
            "permanent": true
        }
    ]
}
```

All of my redirects are considered `permanent`, except for the rewrite I had to use for Netlify's serverless functions. But it is no longer needed on Vercel because their functions are already served at the sensible `/api` endpoint.

## 🌳 environment variables

The last piece of the puzzle was moving my environment variables over to Vercel. The UI was easy to find and was almost identical to the Netlify UI.

![environment variables][environment-variables]

Even better, environment variables on Vercel are searchable and configurable based on the different environments (`production`, `preview`, `development`)

## 📊 comparison

Now that the conversion is done, I'm running deploys on both hosts for the time being until I make up my mind on which I prefer. The build times seems to be much faster on Vercel, where they average about three minutes compared to an average of five minutes on Netlify.

Both platforms integrate very well with [GitHub][github], and show comments on pull requests. Although for some weird reason Netlify is linking to a different page on my site instead of the home page.

![pull request comments][pr-comments]

Both hosts also provide CLIs with a `dev` command that's used for starting a development environment. They both pull in environment variables defined in the UI, so you don't need local `.env` files, and they both have access to local serverless functions and redirects.

One thing that Vercel offers for free that Netlify doesn't is [web vitals monitoring][web-vitals]. It keeps track of things like first contentful paint, largest contentful paint, cumulative layout shift, and first input delay, and graphs them over time.

![analytics][analytics]

At this point in time, Vercel seems to be the clear winner. It's got feature parity, better build performance, web vitals monitoring, and easier configuration. Plus, if I _ever_ decide to migrate this site to [Next.js][next], it pairs perfectly with [Vercel][vercel].

Where do you host your websites? Let me know on [Twitter][twitter]!

[pr]: https://github.com/bradgarropy/bradgarropy.com/pull/258
[netlify]: https://www.netlify.com
[vercel]: https://vercel.com
[next]: https://nextjs.org
[gatsby]: https://www.gatsbyjs.org
[helpers]: https://vercel.com/docs/runtimes#official-runtimes/node-js/node-js-request-and-response-objects/node-js-helpers
[typescript]: https://www.typescriptlang.org
[netlify-redirects]: https://docs.netlify.com/routing/redirects
[vercel-redirects]: https://vercel.com/docs/cli#project-configuration/redirects
[environment-variables]: /images/posts/environment-variables.png
[pr-comments]: /images/posts/pr-comments.png
[analytics]: /images/posts/analytics.png
[github]: https://github.com
[web-vitals]: https://vercel.com/bradgarropy/bradgarropy/analytics
[twitter]: https://twitter.com/bradgarropy
[express]: https://expressjs.com
