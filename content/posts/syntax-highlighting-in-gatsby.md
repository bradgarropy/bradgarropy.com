---
title: 💄 syntax highlighting in gatsby
slug: syntax-highlighting-in-gatsby
date: "2018-10-08"
topic: coding
tags: []
---

After I posted about how I set up the [👀 contentful preview api with gatsby + netlify][contentful-preview], I got some positive feedback and some questions about the syntax highlighting on my blog. Luckily I was already working on a post to discuss exactly that, so I'll walk you through how I set it up.

## gatsby-remark-prismjs

I really had no clue where to start. So a quick search for gatsby syntax highlighting pulled up [Prism][prism]. It turned out [Gatsby][gatsby] already had a [plugin][gatsby-remark-prismjs] for that! I installed the package with `npm i gatsby-remark-prismjs`, then added an option under the [remark][gatsby-transformer-remark] plugin that I already had installed.

```javascript {5-11}
// gatsby-config.js

{
    resolve: "gatsby-transformer-remark",
    options: {
        plugins: [
              {
                  resolve: "gatsby-remark-prismjs",
              },
        ],
    },
},
```

Next I had to actually style the code. So I browsed Prism's [themes][prism-themes] and picked out [prism-funky][prism-funky]. I copied the file into my project and made some [modifications][prism-funky-css] to the colors and background. In order for Prism to pick up the styles, I had to import the CSS file anywhere code would be displayed, like in my `<PostBody/>` component.

```javascript {5}
// components/PostBody.jsx

// styles
import "../scss/PostBody.scss"
import "../scss/PrismFunky.scss"
```

And that was it, just a few lines of code changes to produce the awesome code blocks you're seeing now!

## not sexy enough

I'm still missing one key feature when it comes to syntax highlighting, line numbers. My attempts to get that working in conjuction with line highlighting have been unsuccessful so far, but I'll figure it out eventually.

While my current syntax highlighting theme is pretty sweet, it's not sexy enough. I've got plans to create my own theme for [Visual Studio Code][vscode] and use the same colors on this blog. When I get around to working on it, you can find it [here][vscode-theme].

Thanks for following along and tweet me your themes [@bradgarropy][twitter]!

[contentful-preview]: https://bradgarropy.com/contentful-preview-api-with-gatsby-netlify
[prism]: https://prismjs.com/
[gatsby]: https://www.gatsbyjs.org/
[gatsby-remark-prismjs]: https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
[gatsby-transformer-remark]: https://www.gatsbyjs.org/packages/gatsby-transformer-remark
[prism-themes]: https://github.com/PrismJS/prism/tree/master/themes
[prism-funky]: https://github.com/PrismJS/prism/blob/master/themes/prism-funky.css
[prism-funky-css]: https://github.com/bradgarropy/bradgarropy.com/blob/master/src/scss/PrismFunky.scss
[vscode]: https://code.visualstudio.com/
[vscode-theme]: https://github.com/bradgarropy/vscode-theme
[twitter]: https://twitter.com/bradgarropy
