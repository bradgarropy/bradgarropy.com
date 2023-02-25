---
title: 🌑 next.js dark mode
slug: nextjs-dark-mode
date: "2023-02-24"
topic: coding
---

overall strategy
use react context to manage color theme
persist theme in localstorage
initialize theme from localstorage, default to light mode
prevent light mode flashes

react context
two use effects
theme provider

theme.js
initialization

TODO: check out the [pull request][pull-request]  
TODO: reference josh's [perfect dark mode][perfect-dark-mode]

![dark mode diagram][dark-mode-diagram]

[pull-request]: https://github.com/bradgarropy/bradgarropy.com/pull/349
[perfect-dark-mode]: https://joshwcomeau.com/react/dark-mode
[dark-mode-diagram]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/dark-mode-diagram.png
