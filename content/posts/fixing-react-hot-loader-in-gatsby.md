---
title: 🔥 fixing react-hot-loader in gatsby
slug: fixing-react-hot-loader-in-gatsby
date: "2020-11-10"
topic: coding
---

Have you ever cloned a fresh copy of [Gatsby][gatsby], installed the dependencies, and booted up the development server only to be greeted by this ugly warning in your console?

![warning][warning]

Well I have. Enough times to drive me to actually address the issue. The problem lies with [react-hot-loader][hot-loader], the package Gatsby uses for hot reloading [react][react] components. The warning is telling us that the version of `@hot-loader/react-dom` is not compatible with the installed version of `react`.

To fix this, first install the latest version of `@hot-loader/react-dom`.

```shell
npm install --save-dev @hot-loader/react-dom
```

Then modify the `webpack` configuration in the `gatsby-node.js` file. The following code tells Gatsby to use the hot version of `react-dom` only while running in `development`.

```javascript
const onCreateWebpackConfig = ({stage, actions}) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {"react-dom": "@hot-loader/react-dom"},
            },
        })
    }
}
```

And that's it, no more annoying error message! Hopefully one day Gatsby will adopt [react-refresh][refresh], eliminate this warning message, and give us stateful component reloading too!

[refresh]: https://github.com/facebook/react/tree/master/packages/react-refresh
[react]: https://reactjs.org
[hot-loader]: https://github.com/gaearon/react-hot-loader
[warning]: /images/posts/warning.png
[gatsby]: http://gatsbyjs.com
