---
title: 📦 npm publish with github actions
slug: npm-publish-with-github-actions
date: "2019-04-27"
topic: coding
tags: []
---

I recently published my first package to [npm][npm], [eslint-config-bradgarropy][eslint-config-bradgarropy]. But now that it's had a few version bumps, eight to be exact, I wanted to automate the release process. Turns out I could do this without even leaving [GitHub][github] with the _relatively_ new [GitHub Actions][github-actions] feature.

I set up the workflow by creating a `.github/main.workflow` file in the project. From there I had the choice to edit the `main.workflow` file manually, or use the visual editor on GitHub. I went with the visual editor.

I clicked the **create a new workflow** button, gave it a name, and configured it to run when a release is created.

![configure-workflow][configure-workflow]

Next it was time to hook up an action. I dragged the blue arrow into the next box and found that GitHub already had an [npm action][npm-action]. I edited the **label**, changed the **args** field to `publish`, and added my `NPM_AUTH_TOKEN`.

![configure-action][configure-action]

I clicked **Done** and the final workflow looks like this.

![main-workflow][main-workflow]

I checked the `main.workflow` file and found that the visual editor had generated the following code.

```
workflow "🚀 release" {
  on = "release"
  resolves = ["📦 npm publish"]
}

action "📦 npm publish" {
  uses = "actions/npm@master"
  secrets = ["NPM_AUTH_TOKEN"]
  args = "publish"
}
```

Makes sense! Then I made some releases and headed over to the **Actions** tab of my repository and took a look. The tab showed each run of the `🚀 release` workflow, where you can drill down and see the logs from each `📦 npm publish` action!

![actions][actions]

This process coudn't have been easier, and now I'm looking for other automation opportunities for GitHub Actions. Head over to [Twitter][twitter] and link me your favorite or custom actions!

[npm]: https://www.npmjs.com
[eslint-config-bradgarropy]: https://www.npmjs.com/package/eslint-config-bradgarropy
[github]: https://github.com
[github-actions]: https://github.com/features/actions
[configure-workflow]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/configure-workflow.png
[npm-action]: https://github.com/marketplace/actions/github-action-for-npm
[configure-action]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/configure-action.png
[main-workflow]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/main-workflow.png
[actions]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/actions.png
[twitter]: https://twitter.com/bradgarropy
