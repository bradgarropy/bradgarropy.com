---
title: 💿 remix simplifies things
slug: remix-simplifies-things
date: "2022-10-01"
topic: coding
tags: ["remix"]
---

I've got an new idea for an application, so naturally I started thinking about what tech stack I want to use to build it. Lately I've been a bit bothered by the growing complexity of [Next.js][nextjs], and I've been hearing so many good things about [Remix][remix], so I jumped in a gave it a shot.

When learning any new framework, I start by going through the tutorials and creating my own [starter][remix-starter] template. Then I extend the starter template into an [application][remix-app] to get a feel for how data and authentication work. Here are a few of my thoughts along the way.

## 👨🏼‍🏫 amazing tutorials

Hands down Remix has the best tutorials I've ever come across for a framework. Taught by the legendary [Kent C. Dodds][kent-dodds], there are written and video versions of a beginner and advanced tutorial.

The beginner tutorial has you create a [developer blog][blog-tutorial]. But this tutorial doesn't just cover rendering static `markdown` files, it's a full blown application with the ability to manage posts and store them in a database. The advanced tutorial takes it one step futher and has you building a [jokes application][jokes-tutorial] that includes user authentication and a database to store user submitted jokes.

I've never had a tutorial teach me how to build a full blown application in the span of a few hours. No other framework goes this far in showing you how to use their product to build on the web.

## 🎶 stacks

Once I went through the tutorials and had built applications from scratch, Remix provided an easy way to bootstrap my next project: [Remix Stacks][remix-stacks].

They have three pre-built stacks that come with linting, unit testing, end to end testing, TypeScript, a CSS library, authentication, a database ORM, and a deployment strategy out of the box. These are ready to go application frameworks that literally solve all of the most difficult parts for you.

## ✨ data loading and mutations

After more experience with Remix, I realized that Next.js only delivers half of the data story. Sure, Next.js offers multiple ways to load data, but once the page has been rendered it's up to the developer to figure out how to mutate that data. This leaves you with an overwhelming amount of choices like [react-query][react-query], [SWR][swr], [apollo][apollo], or any of the other client side libraries, all of which still require you to handle loading and error states.

![remix vs next][remix-vs-next]

Remix implements data loading through a [loader][loader] function, and data mutations through an [action][action] function. Simple as that. Both of these functions are run on the server, and cause no loading state in the application. While the default server rendered page may seem limiting, Remix doesn't block you from _progressively enhancing_ your application with other Remix functions like [useFetcher][usefetcher] or [useTransition][usetransition].

## 🛑 less react

The more I worked in Remix, the more I realized I was writing less React and less JavaScript. Remix enabled me to write more HTML and leverage the web platform. I no longer needed `useEffect` to load data, I had the `loader` function for that. I didn't use `onClick` handlers to respond to user interactions, I had `<form>` elements for that.

I also found that I didn't need to create React components nearly as often. Outside of my design system, nearly all of the shared UI components were distributed with nested routes. For example, instead of creating a `<Header>` component and rendering it on multiple pages, I had a single parent route that rendered the header, which then automatically included on all nested routes.

This URL based separation of concerns felt very natural, and caused me to jump between files while coding much less than before.

## 🤔 interesting css methodology

This router based system does lead to some oddities though, particularly around styling. If you do wind up creating components that need styles that cross route boundaries, like a design system, surfacing those styles is not very straightforward.

The simplest way that Remix suggests is to create a `shared.css` file that is loaded at the root for every page. However, I typically like to keep any styles colocated with the associated component.

If that's the case, for every use of the component you have to trace the CSS up to the parent route and include the component styles in the `links` function. This becomes confusing very quickly, as it gets hard to keep track of what route uses what component.

```typescript
import globalStyles from "~/styles/global.css"
import {links as modalLinks} from "~/components/modal"
import {links as buttonLinks} from "~/components/button"
import {links as dropdownLinks} from "~/components/dropdown"

const links = () => {
    return [
        {
            rel: "stylesheet",
            href: globalStyles,
        },
        ...buttonLinks(),
        ...modalLinks(),
        ...dropdownLinks(),
    ]
}

export {links}
```

Ultimately I decided on [Tailwind][tailwind] for styling. This allows me to load a single CSS file at the root that contains all the utility classes I need for every route. It's low mental overhead, and I still get all the great benefits of developing with Tailwind.

```typescript
import styles from "~/styles/tailwind.css"

const links = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ]
}

export {links}
```

## 🗃️ typescript inconsistencies

One last thing that bugged me was typing the `loader` data. When sending data over HTTP, everything is serialized into a string. Knowing that, Remix wraps whatever data type you have with a `SerializeObject` type, making every field in your data type optional.

```typescript
// original type
type Todo = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    content: string
    isComplete: boolean
}

// serialized type
type SerializedTodo = SerializeObject<
    Simplify<
        {} & {
            id?: number
            content?: string
            createdAt?: Date
            updatedAt?: Date
            isComplete?: boolean
            userId?: number
        }
    >
>
```

While I know they did this with the best of intentions in order to account for real life failures, it made me want to cast the `useLoader` response to my desired type. It may not be the safest option, but it was so much easier to work with.

_After [talking][tweet] with some Remix contributors, this was actually caused by a configuration in my `tsconfig.json` file. Setting `"strict": true` generated the correct types!_

## 🤓 onward with remix

Overall I'm very happy working in [Remix][remix], and I plan to build all of my future applications with it. Instead of integrating services, installing JavaScript libraries, and writing client code, Remix shifts backs to the traditional client / server model. This shift simplifies the process of building applications on the web, and improves the user experience by doing most of the work on the server.

[nextjs]: https://nextjs.org
[remix]: https://remix.run
[remix-starter]: https://github.com/bradgarropy/remix-starter
[remix-app]: https://github.com/bradgarropy/remix-app
[kent-dodds]: https://kentcdodds.com
[blog-tutorial]: https://remix.run/docs/en/v1/tutorials/blog
[jokes-tutorial]: https://remix.run/docs/en/v1/tutorials/jokes
[remix-stacks]: https://remix.run/docs/en/v1/pages/stacks
[tailwind]: https://tailwindcss.com
[remix-vs-next]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/remix-vs-next.png
[react-query]: https://tanstack.com/query
[swr]: https://swr.vercel.app
[apollo]: https://apollographql.com/apollo-client
[loader]: https://remix.run/docs/en/v1/api/conventions#loader
[action]: https://remix.run/docs/en/v1/api/conventions#action
[usefetcher]: https://remix.run/docs/en/v1/api/remix#usefetcher
[usetransition]: https://remix.run/docs/en/v1/api/remix#usetransition
[tweet]: https://twitter.com/bradgarropy/status/1576294073958248448
