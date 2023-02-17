---
title: 💨 css modules to tailwind
slug: css-modules-to-tailwind
date: "2023-02-16"
topic: coding
---

I just finished migrating this website from [CSS Modules][css-modules] to [Tailwind][tailwind]. Overall it was a straightforward, but tedious process. The transition has proven to be worth it, and I'll explain my thoughts on the outcome below.

## 🧬 better defaults

If nothing else, Tailwind starts you off with a [better set of defaults][preflight]. They accomplish this with a CSS reset pulled in with the `@tailwind base` directive. The Tailwind reset goes above and beyond, and really sets you up with a proper blank page without the need to constantly override default browser styles.

Tailwind also provides you with a stellar set of design tokens out of the box. Everything from colors, to box shadows, to spacing have all been excellently designed for you to utilize.

If you opt into some of Tailwind's [official plugins][plugins], they offer additional features than what comes out of the box. For example, the [typography plugin][typography-plugin] provided much better styling for my `markdown` content than I had created myself.

## ✍🏼 authoring experience

While the authoring experience of Tailwind is its number on criticism, I didn't find it to be that bad. I really love the fact that I'm able to write my styles directly next to the elements that they affect rather than off in another file.

I also don't have to spend any time thinking about class naming, with the exception of a few Tailwind classes that confuse me every time! Specifically the grid placement classes. Sometimes you have to be specific about the placement direction, like `justify` or `align`, other times you have to be specific about the thing you're placing, like `content` or `items`, and sometimes it's a mix of both.

![grid placement][grid-placement]

Luckily, Tailwind has an awesome [vscode extension][vscode-extension] that not only autocompletes class names for you, but also shows the associated CSS output! This plugin is super helpful on all properties with the exception of `border`. I found that when

## 💯 incredibly maintainable

-   can add or remove classes knowing it won't affect anything else
-   got rid of a whole global css file
-   configuration isn't too crazy (59 lines)
-   despite tailwind being verbose, i removed code
-   can still leverage the cascade

![tailwind diff][tailwind-diff]

## 🏎️ performance improvements

-   less http requests
-   faster load time
-   less data transferred
-   [github issue][github-issue]

![http requests][http-requests]
![page load data][page-load-data]

# 🙌🏼 framework integrations

-   first class support in remix

[http-requests]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/http-requests.png
[page-load-data]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/page-load-data.png
[tailwind-diff]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/tailwind-diff.png
[grid-placement]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/grid-placement.png
[github-issue]: https://github.com/vercel/next.js/issues/19009
[prettier-plugin]: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
[vscode-extension]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/343
[css-modules]: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
[tailwind]: https://tailwindcss.com
[preflight]: https://tailwindcss.com/docs/preflight
[plugins]: https://tailwindcss.com/docs/plugins#official-plugins
[typography-plugin]: https://tailwindcss.com/docs/typography-plugin

[tailwind-config]:
