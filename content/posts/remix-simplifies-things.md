---
title: 💿 remix simplifies things
slug: remix-simplifies-things
date: "2022-10-01"
topic: coding
---

I've got an new idea for an application, so naturally I started thinking about what tech stack I want to use to build it. Lately I've been a bit bothered by [Next.js][nextjs], and I've been hearing so many good things about [Remix][remix], so I jumped in a gave it a shot.

When learning any new framework I start by going through the tutorials and creating my own [starter][remix-starter] template. Then I extend the starter template into an [application][remix-app] to get a feel for how data and authentication work. Here's a few of my thoughts along the way.

## 👨🏼‍🏫 amazing tutorials

Hands down Remix has the best tutorials I've ever come across for a framework. Taught the legendary [Kent C. Dodds][kent-dodds], there are written and video versions of a beginner and advanced tutorial.

The beginner tutorial has you create a [developer blog][blog-tutorial]. But this tutorial doesn't just cover static `markdown` files, it's a full blown application with the ability to create, update, and delete posts and store them to a database. The advanced tutorial takes it one step futher and has you building a [jokes application][jokes-tutorial] that includes user authentication and a database to store user submitted jokes.

I've never had a tutorial teach me how to build a full blown application in the span of a few hours. No other framework goes this far in showing you how to use their product to build on the web.

## 🎶 stacks

Once I went through the tutorials and had built applications from scratch, Remix had an answer for bootstrapping my next project: [Remix Stacks][remix-stacks].

They have three pre-built stacks that come with linting, unit testing, end to end testing, TypeScript, a CSS library, authentication, a database ORM, and a deployment strategy out of the box. These are ready to go application frameworks that literally solve all of the most difficult parts of creating an application template for you.

## ✨ data loading and mutations

Once I started building with Remix, it made me realize that Next.js only delivers half of the data story. Sure, Next.js offers multiple ways to load data, but once the page has been rendered it's up to you to figure out how to mutate that data. This leaves you with an overwhelming amount of options like `react-query`, `useSWR`, `apollo` or any of the other client side libraries, all of which still require you to handle loading states.

Remix implements data loading through a `loader` function, and data mutations through an `action` function. Simple as that. Both of these functions are run on the server, and cause no loading state in the application. While the default server rendered page may seem limiting, Remix doesn't block you from _progressively enhancing_ your application with other Remix functions like `useFetcher` or `useTransition`.

## 🛑 less react

The more I worked in Remix, the more I realized I was writing less React and less JavaScript. Remix enabled me to write more HTML and leverage the web platform. I no longer needed `useEffect` to load data, I had the `loader` function for that. I didn't user `onClick` handlers to respond to user interactions, I had `<form>` elements for that.

I also found that I didn't need to create React components nearly as often. Outside of my design system, nearly all of the shared UI components were distributed with nested routes. For example, instead of creating a `<Header>` component and including it on multiple pages, I had a single parent route that rendered the header HTML which then included on all child pages.

This URL based separation of concerns felt very natural, and caused me to jump between files while coding much less than before.

## 🤔 interesting css methodology

This router based system does lead to some oddities though, particularly around styling. If you do wind up creating components that need styles that cross route boundaries, surfacing those styles is not very straightforward.

The simplest way that Remix suggests is to create a `shared.css` file that is loaded at the root for every page. However, I typically like to keep any styles colocated with the component. If that's the case, for every use of the component you have to trace the CSS up to the parent route and include the component styles in the `links`. This becomes confusing very quickly, as it gets hard to keep track of what route uses what component.

Ultimately I decided on using [Tailwind][tailwind] for styling. This allows me to load a single CSS file at the root that contains all the utility classes I need for every route. It's low mental overhead, and I still get all the great benefits of developing with Tailwind.

## 🗃️ typescript inconsistencies

One last thing that bugged me was typing the `loader` data. When sending data over HTTP, everything is serialized into a string. Knowing that, Remix wraps whatever data type you have with a `SerializeObject` type, making every field in your data type optional.

While I know they did this with the best of intentions in order to account for real life failures, it made me want to cast the `useLoader` response to my desired type. It may not be the safest route, but it was so much easier to work with.

## 🤓 onward with remix

Overall I'm very happy working in Remix, and I plan to build all of my future applications with it. Instead of integrating services, installing JavaScript libraries, and writing client code, Remix shifts backs to the traditional client / server model. This shift simplifies the process of building applications on the web, and improves the user experience by doing most of the work on the server.

[nextjs]: https://nextjs.org
[remix]: https://remix.run
[remix-starter]: https://github.com/bradgarropy/remix-starter
[remix-app]: https://github.com/bradgarropy/remix-app
[kent-dodds]: https://kentcdodds.com
[blog-tutorial]: https://remix.run/docs/en/v1/tutorials/blog
[jokes-tutorial]: https://remix.run/docs/en/v1/tutorials/jokes
[remix-stacks]: https://remix.run/docs/en/v1/pages/stacks
[tailwind]: https://tailwindcss.com
