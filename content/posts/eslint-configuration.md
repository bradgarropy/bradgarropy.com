---
title: 💎 eslint configuration
slug: eslint-configuration
date: "2019-04-16"
topic: coding
---

Previously I kept my [ESLint][1] configuration in my [dotfiles][2] repository. But I'm a lazy developer, and I got tired of opening up [GitHub][3], navigating to the repository, finding the file, and copy / pasting it to each new project I started. So I made my entire ESLint configuration an [npm][4] package and [published it][5]!

## 🔌 plugins

Beyond setting all of the basic rules, I've also included a few plugins in my configuration.

-   `eslint-plugin-jsx-a11y`
-   `eslint-plugin-react`
-   `eslint-plugin-react-hooks`

As I'm primarily a [React][6] developer, these plugins help me with basic linting and the new rules of [hooks][7]. Additionally, the `jsx-a11y` plugin nags me to write more accessible HTML.

## 💋 no prettier

As some of you may have noticed, this configuration does not include [Prettier][8]. I've intentionally kept my Prettier and ESLint configurations separate. I came to this conclusion because ESLint only applies to JavaScript, whereas Prettier can format multiple languages, so I didn't think it made sense to bundle them together.

## 👨🏼‍🏫 usage

First, install the configuration with command below. This not only installs the ESLint configuration, but all peer dependencies as well (like ESLint and the plugins).

```
npx install-peerdeps --dev eslint-config-bradgarropy
```

Next, create a `.eslintrc` file in the root of your project and instruct it to extend the `bradgarropy` configuration.

```json
{
    "extends": "bradgarropy"
}
```

You should now be good to go! If you wish to further customize the configuration, you can edit your `.eslintrc` and add more settings.

If you run into any trouble, [create an issue][9] and I'll take a look! And if you like it, give it a ⭐.

[1]: https://eslint.org
[2]: https://github.com/bradgarropy/dotfiles
[3]: https://github.com
[4]: https://www.npmjs.com
[5]: https://www.npmjs.com/package/eslint-config-bradgarropy
[6]: https://reactjs.org
[7]: https://reactjs.org/docs/hooks-intro.html
[8]: https://prettier.io
[9]: https://github.com/bradgarropy/eslint-config-bradgarropy/issues
