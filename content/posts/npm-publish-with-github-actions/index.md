---
title: 📦 npm publish with github actions
slug: npm-publish-with-github-actions
date: 2019-04-27
topic:
    name: coding
    icon: 💻
---

I recently published my first package to [npm][1], [eslint-config-bradgarropy][2]. But now that it's had a few version bumps, eight to be exact, I wanted to automate the release process. Turns out I could do this without even leaving [GitHub][3] with the _relatively_ new [GitHub Actions][4] feature.

I set up the workflow by creating a `.github/main.workflow` file in the project. From there I had the choice to edit the `main.workflow` file manually, or use the visual editor on GitHub. I went with the visual editor.

I clicked the **create a new workflow** button, gave it a name, and configured it to run when a release is created.

![configure-workflow][5]

Next it was time to hook up an action. I dragged the blue arrow into the next box and found that GitHub already had an [npm action][6]. I edited the **label**, changed the **args** field to `publish`, and added my `NPM_AUTH_TOKEN`.

![configure-action][7]

I clicked **Done** and the final workflow looks like this.

![main-workflow][8]

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

![actions][9]

This process coudn't have been easier, and now I'm looking for other automation opportunities for GitHub Actions. Head over to [Twitter][10] and link me your favorite or custom actions!

[1]: https://www.npmjs.com
[2]: https://www.npmjs.com/package/eslint-config-bradgarropy
[3]: https://github.com
[4]: https://github.com/features/actions
[5]: //images.ctfassets.net/s6h0a7vn6pxb/13lE0EGuy1HkcH6W007NyI/e3c5e0122bba9ab7f4b1006a2c794f6f/configure-workflow.PNG
[6]: https://github.com/marketplace/actions/github-action-for-npm
[7]: //images.ctfassets.net/s6h0a7vn6pxb/2KhoaT2VzsOE9yphFpu49y/1ccfa978f65ac38c21806752002b6a69/configure-action.PNG
[8]: //images.ctfassets.net/s6h0a7vn6pxb/GOo2c8n75B5E9FCdkIfPt/7756652da5b4d81a1c74e540430c86ec/main-workflow.PNG
[9]: //images.ctfassets.net/s6h0a7vn6pxb/5EKED91v4lMQzHJ81NUpWY/9f0e659ae956436b1fe70b6b9d66ed83/actions.PNG
[10]: https://twitter.com/bradgarropy
