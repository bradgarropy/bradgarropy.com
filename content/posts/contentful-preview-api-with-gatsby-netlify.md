---
title: 👀 contentful preview api with gatsby + netlify
slug: contentful-preview-api-with-gatsby-netlify
date: "2018-09-04"
topic: coding
---

My favorite feature of [Netlify][1] is branch deploys, all I have to do is push my code to a [Github][2] branch and Netlify will deploy my site to a custom url specific to that branch. This feature essentially enables different environments, like production, development, staging, etc.

So my vision was to have [bradgarropy.com][3] as the production environment, and [dev.bradgarropy.com][4] as the development environment. Production should only show published posts, and development should show published and draft posts so that I can preview what I'm working on.

[Contentful][5] has two separate Content Delivery APIs, one for serving production content located at `cdn.contentful.com`, and one for serving preview content at `preview.contentful.com`. Each environment requires its own token for access, which needs to be added to the environment variables. You can find these tokens in Contentful under **Settings** -> **API keys**.

## netlify environment

The Netlify environment setup is simple, it's under **Settings** -> **Build & deploy** -> **Build environment variables**. Unfortunately, Netlify doesn't support setting different environment variables per branch, so I had to add them all here.

![netlify build environment variables][6]

Now I just needed to add the logic to determine when to use the production or preview variables.

## gatsby / contentful configuration

Netlify has a concept called [deploy contexts][7] which I used to determine what environment I'm operating in. The `CONTEXT` environment variable is set to `production` for production builds, `branch-deploy` for branch builds, or `deploy-preview` for pull requests. This code took care of it.

```javascript
// gatsby-config.js

let contentfulOptions = {}

if (process.env.CONTEXT === "production") {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: process.env.CONTENTFUL_HOST,
    }
} else {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
        host: process.env.CONTENTFUL_PREVIEW_HOST,
    }
}
```

Now I just had to configure the `gatsby-source-contentful` plugin with the options.

```javascript
// gatsby-config.js

{
    resolve: "gatsby-source-contentful",
    options: contentfulOptions,
}
```

Boom, I pushed this code and I had [dev.bradgarropy.com][4] up and running with my published and draft posts.

## local environment

I wasn't done yet, beacuse I still needed support for the Content Preview API in my local development environment. [Gatsby][8] accepts [environment variables][9] from `.env` files, which are loaded based on the `NODE_ENV`. So I created these files.

```ini {3}
; .env.production

CONTEXT=production
CONTENTFUL_SPACE=<space id>
CONTENTFUL_HOST=cdn.contentful.com
CONTENTFUL_TOKEN=<access token>
CONTENTFUL_PREVIEW_HOST=preview.contentful.com
CONTENTFUL_PREVIEW_TOKEN=<preview token>
```

```ini {3}
; .env.development

CONTEXT=branch-deploy
CONTENTFUL_SPACE=<space id>
CONTENTFUL_HOST=cdn.contentful.com
CONTENTFUL_TOKEN=<access token>
CONTENTFUL_PREVIEW_HOST=preview.contentful.com
CONTENTFUL_PREVIEW_TOKEN=<preview token>
```

I had to add in the `CONTEXT` environment variable to mimic Netlify's environment. Then I loaded the environment files using [dotenv][10] like so.

```javascript
// gatsby-config.js

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
```

So when I run `gatsby build` I get only published posts, and when I run `gatsby develop` I get published and draft posts!

## sneak preview

This whole setup came about when I was writing a post that required some CSS changes to style some Markdown elements I'd never used on the blog before. I needed a way to show unpublished content while still developing the site.

Ultimately I'm really happy with this solution. However I do see room for improvement. If Netlify adds a way to specify environment variables per branch from their site, I could eliminate some of this code.

But for now, just know that you can catch a sneak peak of content I'm working on at [dev.bradgarropy.com][4]!

[1]: https://app.netlify.com/
[2]: https://github.com/
[3]: https://bradgarropy.com/
[4]: https://dev.bradgarropy.com/
[5]: https://app.contentful.com/
[6]: /images/posts/netlify-environment.png
[7]: https://www.netlify.com/docs/continuous-deployment/#deploy-contexts
[8]: https://www.gatsbyjs.org/
[9]: https://www.gatsbyjs.org/docs/environment-variables/
[10]: https://github.com/motdotla/dotenv#dotenv
