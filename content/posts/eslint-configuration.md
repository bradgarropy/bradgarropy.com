---
title: 💎 eslint configuration
slug: eslint-configuration
date: "2019-04-16"
topic: coding
tags: ["eslint"]
---

Previously I kept my [ESLint][eslint] configuration in my [dotfiles][dotfiles] repository. But I'm a lazy developer, and I got tired of opening up [GitHub][github], navigating to the repository, finding the file, and copy / pasting it to each new project I started. So I made my entire ESLint configuration an [npm][npm] package and [published it][eslint-config-bradgarropy]!

## 🔌 plugins

Beyond setting all of the basic rules, I've also included a few plugins in my configuration.

- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

As I'm primarily a [React][react] developer, these plugins help me with basic linting and the new rules of [hooks][hooks]. Additionally, the `jsx-a11y` plugin nags me to write more accessible HTML.

## 💋 no prettier

As some of you may have noticed, this configuration does not include [Prettier][prettier]. I've intentionally kept my Prettier and ESLint configurations separate. I came to this conclusion because ESLint only applies to JavaScript, whereas Prettier can format multiple languages, so I didn't think it made sense to bundle them together.

## 👨🏼‍🏫 usage

First, install the configuration with command below. This not only installs the ESLint configuration, but all peer dependencies as well (like ESLint and the plugins).

```zsh
npx install-peerdeps --dev eslint-config-bradgarropy
```

Next, create a `.eslintrc` file in the root of your project and instruct it to extend the `bradgarropy` configuration.

```json
{
    "extends": "bradgarropy"
}
```

You should now be good to go! If you wish to further customize the configuration, you can edit your `.eslintrc` and add more settings.

If you run into any trouble, [create an issue][issues] and I'll take a look! And if you like it, give it a ⭐.

[eslint]: https://eslint.org
[dotfiles]: https://github.com/bradgarropy/dotfiles
[github]: https://github.com
[npm]: https://www.npmjs.com
[eslint-config-bradgarropy]: https://www.npmjs.com/package/eslint-config-bradgarropy
[react]: https://reactjs.org
[hooks]: https://reactjs.org/docs/hooks-intro.html
[prettier]: https://prettier.io
[issues]: https://github.com/bradgarropy/eslint-config-bradgarropy/issues
