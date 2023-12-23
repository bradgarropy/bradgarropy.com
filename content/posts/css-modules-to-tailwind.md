---
title: 💨 css modules to tailwind
slug: css-modules-to-tailwind
date: "2023-02-22"
topic: coding
tags: ["tailwind", "css"]
---

I just finished migrating this website from [CSS Modules][css-modules] to [Tailwind][tailwind]. Overall it was a straightforward, but long process. The transition has proven to be worth it, and I'll explain my thoughts on the outcome below.

## 🧬 better defaults

If nothing else, Tailwind starts you off with a [better set of defaults][preflight]. They accomplish this with a CSS reset pulled in with the `@tailwind base` directive. The Tailwind reset goes above and beyond, and really sets you up with a proper blank page without the need to constantly override default browser styles.

Tailwind also provides you with a stellar set of design tokens out of the box. Everything from colors, to box shadows, to spacing have all been excellently designed for you to utilize.

If you opt into some of Tailwind's [official plugins][plugins], they offer great additional features. For example, the [typography plugin][typography-plugin] provided much better styling for my `markdown` content than I had created myself.

## ✍🏼 authoring experience

While the authoring experience of Tailwind is its number one criticism, I didn't find it to be that bad. I really love the fact that I'm able to write my styles directly next to the elements that they affect rather than off in another file.

I also don't have to spend any time thinking about class naming, with the exception of a few Tailwind classes that confuse me every time! Specifically the grid placement classes. Sometimes you have to be specific about the placement direction, like `justify` or `align`, other times you have to be specific about the thing you're placing, like `content` or `items`, and sometimes it's a mix of both.

![grid placement][grid-placement]

Luckily, Tailwind has an awesome [vscode extension][vscode-extension] that not only autocompletes class names for you, but also shows the associated CSS output! This plugin is super helpful on all properties with only a few exceptions. For example, I found that when it autocompletes `border`, it places all of the different `border-spacing` values at the top of the list, forcing me to scroll way down to reach more relevant classes like `border-4`.

## 💯 incredibly maintainable

The biggest benefit that Tailwind offers is its long term maintainability. While making this transition, I was able to remove the majority of a `global.css` file. Modifying those styles was incredibly difficult because I didn't know which parts of the website would be affected. With Tailwind, all styles are declared right on the elements they modify, which means no scoping issues. Despite being pretty verbose, I actually _removed_ code during the migration.

![tailwind diff][tailwind-diff]

But that doesn't mean Tailwind is not reusable. You can still leverage the cascade with Tailwind's class based styling. Instead of declaring a `font-family` on every element, you can place the class high up in the DOM and the styles will apply to all children.

If you ever need to break free from Tailwind's out of the box classes, you can use [arbitrary values][arbitrary-values], or customize your [configuration][configuration]. While I did a fair bit of customization, my configuration was only [59 lines][tailwind-config] of code.

## 🏎️ performance improvements

Most importantly, Tailwind brought performance improvements to my website. Primarily this was through reducing the amount of HTTP requests. It turns out that Next.js [preloads CSS Modules][github-issue] for client side routing to adjacent pages, which caused seven extra requests on my home page. Given that I'm moving to [Remix][remix] soon, I won't have much use for client side routing.

![http requests][http-requests]

This reduction in HTTP requests ultimately lead to faster load times on my website by about `200ms` and a reduced page weight of around `50kb`.

![page load data][page-load-data]

## 🙌🏼 framework integrations

While Tailwind does integrate well with [Next.js][next] through [create-next-app][with-tailwind], that only supports new projects. As I mentioned before I'll be moving to [Remix][remix], which is getting first class [Tailwind support][remix-tailwind] very soon.

## 🧶 wrap up

Overall I'm very happy with my migration to [Tailwind][tailwind]. It took longer than expected, and rewriting everything from scratch would have probably been quicker, but I liked perspective it gave me. Tailwind has a great developer experience, it improved performance on my site, and gives me a great base to start styling with.

[http-requests]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/http-requests.png
[page-load-data]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/page-load-data.png
[tailwind-diff]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/tailwind-diff.png
[grid-placement]: https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/posts/grid-placement.png
[github-issue]: https://github.com/vercel/next.js/issues/19009
[prettier-plugin]: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
[vscode-extension]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/343
[css-modules]: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
[tailwind]: https://tailwindcss.com
[preflight]: https://tailwindcss.com/docs/preflight
[plugins]: https://tailwindcss.com/docs/plugins#official-plugins
[typography-plugin]: https://tailwindcss.com/docs/typography-plugin
[create-next-app]: https://nextjs.org/docs/api-reference/create-next-app
[with-tailwind]: https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss
[remix-tailwind]: https://remix.run/docs/en/v1/guides/styling#tailwind-css
[arbitrary-values]: https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
[configuration]: https://tailwindcss.com/docs/configuration
[remix]: https://remix.run
[next]: https://nextjs.org
[tailwind-config]: https://github.com/bradgarropy/bradgarropy.com/blob/main/tailwind.config.js
