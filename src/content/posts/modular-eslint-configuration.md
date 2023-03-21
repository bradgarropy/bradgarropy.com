---
title: 💎 modular eslint configuration
slug: modular-eslint-configuration
date: "2020-12-16"
topic: coding
---

I feel like I revamp my [eslint][eslint] configuration almost annually nowadays. This year the focus was on modularizing the configuration to support different technologies. Here's what I currently support.

-   [React][npm-eslint-react]
-   [Svelte][npm-eslint-svelte]
-   [JavaScript][npm-eslint-base]
-   [Typescript][npm-eslint-typescript]

The configurations are intended to extend one another, starting from the base [JavaScript][npm-eslint-base] configuration. It can be installed like this.

```bash
npx install-peerdeps --dev @bradgarropy/eslint-config
```

Then you can create an `.eslintrc` file to extend the base configuration.

```json
{
    "extends": ["@bradgarropy/eslint-config"]
}
```

But let's say you were working in a [React][react] project using [TypeScript][typescript]. You can enable linting for those technologies by first downloading the packages.

```bash
npx install-peerdeps --dev @bradgarropy/eslint-config-react
npx install-peerdeps --dev @bradgarropy/eslint-config-typescript
```

Then modify the `.eslintrc` file to further extend the base configuration.

```json
{
    "extends": [
        "@bradgarropy/eslint-config",
        "@bradgarropy/eslint-config-react"
        "@bradgarropy/eslint-config-typescript"
    ]
}
```

It's important to note that order matters in the `extends` property. Configurations coming later will take precendence over configurations earlier in the list. However this shouldn't matter with my `eslint` packages, as they modify independent lint rules.

You can find all of my [eslint configurations][npm-eslint] on `npm`. If you have any questions or issues getting them set up, reach out on [Twitter][twitter] or [Discord][discord], or create an [issue][issues]!

[twitter]: https://twitter.com/bradgarropy
[discord]: https://bradgarropy.com/discord
[issues]: https://github.com/bradgarropy/eslint-config/issues/new
[react]: https://reactjs.org
[typescript]: https://www.typescriptlang.org
[eslint]: https://eslint.org
[npm-eslint]: https://npmjs.com/search?q=%40bradgarropy%2Feslint-config
[npm-eslint-base]: https://npmjs.com/package/@bradgarropy/eslint-config
[npm-eslint-react]: https://npmjs.com/package/@bradgarropy/eslint-config-react
[npm-eslint-svelte]: https://npmjs.com/package/@bradgarropy/eslint-config-svelte
[npm-eslint-typescript]: https://npmjs.com/package/@bradgarropy/eslint-config-typescript
