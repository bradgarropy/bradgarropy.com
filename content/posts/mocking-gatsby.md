---
title: 😜 mocking gatsby
slug: mocking-gatsby
date: "2020-11-16"
topic: coding
---

I recently started adding [Jest][jest] tests to all of my [Gatsby][gatsby] projects. Right off the bat I didn't know how to mock `gatsby` so that I could test components that performed `graphql` calls with `useStaticQuery`.

I went searching on the Gatsby site and found [some documentation][gatsby-docs] showing how to mock `gatsby`. The documentation suggested to use `jest` manual mocks, which call for a `__mocks__` directory placed next to the module to be mocked. But I hated the thought of having an ugly `__mocks__` directory at the root of my project.

So I kept digging until I found [this example][example] in the `jest` documentation. The example showed me that the `jest.mock()` function takes a [second argument][mock-docs] which can output any object used to mock the module!

The result is a fairly simple `gatsby` mock that I placed in my test setup file.

```javascript
jest.mock("gatsby", () => {
    const React = require("react")
    const gatsby = jest.requireActual("gatsby")

    return {
        ...gatsby,
        graphql: jest.fn(),
        Link: jest
            .fn()
            .mockImplementation(
                ({
                    activeClassName,
                    activeStyle,
                    getProps,
                    innerRef,
                    partiallyActive,
                    ref,
                    replace,
                    to,
                    ...rest
                }) =>
                    React.createElement("a", {
                        ...rest,
                        href: to,
                        gatsby: "true",
                    }),
            ),
        StaticQuery: jest.fn(),
        useStaticQuery: jest.fn(),
    }
})
```

And don't forget to tell `jest` to run your setup file in `jest.config.js`.

```javascript
const config = {
    // ...
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup"],
}

module.exports = config
```

If you're looking for more context, you can check out the [repository][repo] for this site where I implemented this mock. Do you test your Gastby sites? If so, share your testing tips with me on [Twitter][twitter]!

[twitter]: https://twitter.com/bradgarropy
[repo]: https://github.com/bradgarropy/bradgarropy.com
[mock-docs]: https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options
[example]: https://jestjs.io/docs/en/es6-class-mocks#calling-jestmockdocsenjest-objectjestmockmodulename-factory-options-with-the-module-factory-parameter
[gatsby-docs]: https://gatsbyjs.com/docs/unit-testing/#mocking-gatsby
[jest]: https://jestjs.io
[gatsby]: https://gatsbyjs.com
