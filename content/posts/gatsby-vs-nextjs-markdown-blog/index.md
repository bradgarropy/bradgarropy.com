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

markdown parsing more involved

code block line highlighting

syntax highlighting with vscode themes

remark embedder custom transformers

header link icon not showing up

https://twitter.com/bradgarropy/status/1344375442959200257
https://twitter.com/bradgarropy/status/1345370542845652997
https://twitter.com/bradgarropy/status/1345903752314761218

## 🖼️ image component

image component does not blur up

image component in remark

## 📚 content location

content colocation

## 👨🏼‍⚖️ the verdict

chose gatsby

[conversion]: https://github.com/leerob/gatsby-to-nextjs
[leerob]: https://twitter.com/leeerob
[diff]: images/diff.png
[initial-tweet]: https://twitter.com/bradgarropy/status/1343788025684357122
[branch]: https://github.com/bradgarropy/bradgarropy.com/tree/next
[gatsby]: https://gatsbyjs.com
[nextjs]: https://nextjs.org
