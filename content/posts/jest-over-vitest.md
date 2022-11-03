---
title: 👌🏼 jest over vitest
slug: jest-over-vitest
date: "2022-11-03"
topic: coding
---

JavaScript tooling has gotten a lot faster recently with the advent of ESModules and the creation of new Rust and Go based compilers. These speed improvements have affected everything from bundlers to test runners. [Vitest][vitest] is a prime example of a new test runner that leverages [esbuild][esbuild] to execute very quickly.

I use [jest][jest] to run tests on this website, but I was curious to see how [vitest][vitest] performed in comparison. I [converted][pr] my entire test suite, and here are my thoughts on how it stacks up.

## 👛 initial changes

The first thing I noticed was that `vitest` does not expose globals like `test` and `expect` by default like `jest` does. This is [configurable][globals] to match the `jest` experience.

Another main difference is that `vitest`does not automatically clean up mocks between tests like `jest` does. I handled this by adding cleanup code to my `setup.ts` file.

```typescript
afterEach(() => {
    cleanup()
    vi.clearAllMocks()
    vi.clearAllTimers()
})
```

I have since found a [configuration option][mocks] that can clear mocks between each test.

## 🟦 types

When writing tests, I typically use [jest-dom][jest-dom] to add additional DOM matchers. These matchers come with their own types, and extend the `expect` keyword as expected. While `vitest` does support TypeScript, it doesn't extend these types correctly by default. In order to get this working I had to manually add the types to the `vi` object.

```typescript
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Vi {
        interface JestAssertion<T>
            extends jest.Matchers<void, T>,
                TestingLibraryMatchers<T, void> {}
    }
}
```

## 🌠 svg modules

```typescript
{
    moduleNameMapper: {
        "\\.module.css$": "identity-obj-proxy",
        "\\.css$": "<rootDir>/src/test-utils/css.ts",
        "\\.jpg$": "<rootDir>/src/test-utils/image.ts",
        "\\.svg$": "<rootDir>/src/test-utils/svg.tsx",
    }
}
```

```typescript
import CloseIcon from "svg/close.svg?component"
import DiscordIcon from "svg/discord.svg?component"
import GatsbyIcon from "svg/gatsby.svg?component"
import GithubIcon from "svg/github.svg?component"
import InstagramIcon from "svg/instagram.svg?component"
import JavascriptIcon from "svg/javascript.svg?component"
import LinkIcon from "svg/link.svg?component"
import MenuIcon from "svg/menu.svg?component"
import NextIcon from "svg/next.svg?component"
import NodeIcon from "svg/node.svg?component"
import ReactIcon from "svg/reacticon.svg?component"
import SvelteIcon from "svg/svelte.svg?component"
import TailwindIcon from "svg/tailwind.svg?component"
import TwitchIcon from "svg/twitch.svg?component"
import TwitterIcon from "svg/twitter.svg?component"
import TypescriptIcon from "svg/typescript.svg?component"
import YouTubeIcon from "svg/youtube.svg?component"
```

-   performance
    -   threads
    -   happy dom (form submit issue)

[vitest]: https://vitest.dev
[esbuild]: https://esbuild.github.io
[jest]: https://jestjs.io
[pr]: https://github.com/bradgarropy/bradgarropy.com/pull/334
[globals]: https://vitest.dev/config/#globals
[mocks]: https://vitest.dev/config/#clearmocks
[jest-dom]: https://testing-library.com/docs/ecosystem-jest-dom
[modules]: https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
