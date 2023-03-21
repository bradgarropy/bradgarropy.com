---
title: 😜 mocking next.js
slug: mocking-nextjs
date: "2021-06-28"
topic: coding
---

Previously I covered how to mock [gatsby][mock-gatsby] and [gatsby image][mock-gatsby-image] in `jest` tests. Lately I've been using [Next.js][next] for new projects, and with that I've had to reimplement a few things that I had built specifically for [Gatsby][gatsby]. For instance, I'll have to create new versions of my [gatsby-plugin-seo][gatsby-plugin-seo] and [gatsby-link][gatsby-link] packages for Next.js.

However, I have been able to maintain very high test coverage with these new Next.js applications. But along the way I ran into functionality that I had to mock out so tests can run independently of the framework. The `next/head` and `next/image` components were the first two that came up.

Mocking `next/head` was very simple, just a passthrough of the child nodes, which are usually `meta` tags. This works well for testing purposes because you can write assertions that target the child nodes as you would expect.

```javascript
jest.mock(
    "next/head",
    () =>
        function Head({children}) {
            return <>{children}</>
        },
)
```

While the `next/image` component is much more complicated, the mock remains simple. I defined the mock as an `img` tag and passed through only the `src` and `alt` attributes. This is a subset of the possible props, but you can add more if you like. Now I can treat the `<Image>` component just like a vanilla `img` tag in my tests!

```javascript
jest.mock(
    "next/image",
    () =>
        function Image({src, alt}) {
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={src} alt={alt} />
        },
)
```

If you find these mocks useful, let me know and I can publish them as an `npm` package. What kind of mocks do you use when testing [Next.js][next]? Let me know on [Twitter][twitter]!

[mock-gatsby]: https://bradgarropy.com/blog/mocking-gatsby
[mock-gatsby-image]: https://bradgarropy.com/blog/mocking-gatsby-image
[next]: https://nextjs.org
[gatsby]: https://gatsbyjs.com
[gatsby-plugin-seo]: https://github.com/bradgarropy/gatsby-plugin-seo
[gatsby-link]: https://github.com/bradgarropy/gatsby-link
[twitter]: https://twitter.com/bradgarropy
