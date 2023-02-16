---
title: 💨 css modules to tailwind
slug: css-modules-to-tailwind
date: "2023-02-16"
topic: coding
---

## 🧬 better defaults

-   better css reset
-   typography plugin handles markdown better than i did
-   design tokens

## ✍🏼 authoring experience

-   still getting used to tailwind class names (justify and align naming throws me off every time)
-   love the autocomplete (except for border)
-   amazing [prettier plugin][prettier-plugin] and [vscode extension][vscode-extension]

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
[github-issue]: https://github.com/vercel/next.js/issues/19009
[prettier-plugin]: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
[vscode-extension]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/343

[tailwind-config]:
