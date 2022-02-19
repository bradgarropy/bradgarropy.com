---
title: 😜 mocking gatsby image
slug: mocking-gatsby-image
date: "2021-06-25"
topic: coding
---

In my quest for 100% test coverage, I've had to mock some [gatsby][gatsby] internals to get tests to run in isolation. Since the release of [Gatsby v3][v3], I had to take into account the new [gatsby-plugin-image][gatsby-plugin-image].

In order to mock the plugin, I essentially copied the original plugin and then overwrote the `GatsbyImage` and `StaticImage` components with a function. The function creates a simple [React][react] component that renders a vanilla `<img>` tag. This allows me to run assertions in [jest][jest] tests like I would expect.

```javascript
jest.mock("gatsby-plugin-image", () => {
    const React = require("react")
    const plugin = jest.requireActual("gatsby-plugin-image")

    const mockImage = ({imgClassName, ...props}) =>
        React.createElement("img", {
            ...props,
            className: imgClassName,
        })

    const mockPlugin = {
        ...plugin,
        GatsbyImage: jest.fn().mockImplementation(mockImage),
        StaticImage: jest.fn().mockImplementation(mockImage),
    }

    return mockPlugin
})
```

You can place this code snippet in your [jest setup file][setup] like I did. While this mock doesn't cover all of the functionality of `gatsby-plugin-image`, it certainly handles the features that I use in my daily development.

Feel free to give this mock a try, and if there's enough interest I can package this up and release it on [npm][npm].

[gatsby]: https://gatsbyjs.com
[v3]: https://gatsbyjs.com/blog/gatsbyconf-product-announcements
[gatsby-plugin-image]: https://gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image
[react]: https://reactjs.org
[jest]: https://jestjs.io
[setup]: https://github.com/bradgarropy/bradgarropy.com/blob/master/src/test-utils/setup.js#L9
[npm]: https://npmjs.com
