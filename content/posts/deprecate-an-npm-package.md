---
title: 🔴 deprecate an npm package
slug: deprecate-an-npm-package
date: "2020-12-15"
topic: coding
---

I recently restructured my [eslint configuration][eslint-config], which left my [original configuration][eslint-config-bradgarropy] completely unused. So in order to avoid confusion, I decided to [deprecate][blog] the old package. Here's how I did it.

## 👨🏼‍💻 source code

First I added a deprecation message to the `readme`. I put the message towards the top so visitors can easily see it. As a courtesy, I also linked to the [new package][npm-eslint-config] so users know what to use instead.

![deprecation message][readme]

Then I published the `readme` changes to `npm` as a new `patch` version. The two commands below came in handy to bump the version and publish the package, but your deployment setup may vary.

```
npm version patch
npm publish
```

More documentation is available on the `npm` website for the [version][version] and [publish][publish] commands.

## 📁 github repository

Next I had to archive the repository so that visitors would know it's read only and no longer being supported. The _Archive_ button is under in _Settings_ tab, all the way at the bottom in the _Danger Zone_.

![archive button][archive]

While this button is in the _Danger Zone_, you can _Unarchive_ your repository at any time. So don't sweat it too much!

## 📦 npm package

Finally, I had to let `npm` know that the package is deprecated. I used the [deprecate][deprecate] command to do that. The last parameter is a deprecation message that will show up when a user tries to install a deprecated package

```bash
npm deprecate eslint-config-bradgarropy "This package is deprecated."
```

Once deprecated, `npm` will show a banner to indicate to users that they should no longer use this package. The banner includes the deprecation message you entered in the `npm deprecate` command.

![deprecation banner][deprecated]

## ⛔ deprecate vs unpublish

But some might say, "_That seems like a lot of work. Can't I just delete it?_"

While `npm` does support deleting a package (they call it [unpublishing][unpublish]), it is generally not recommended. Other developers may rely on the package you published, and removing it from the registry would disrupt the work those dependent on your package.

In fact, `npm` has a set of [policies][policies] on _when_ a package can be unpublished. So if you're looking for guidance on when to [unpublish][unpublish-guide] versus when to [deprecate][deprecate-guide], read the [documentation][guide] on that.

_Have you ever deprecated an `npm` package? If so, let me know your process on [Twitter][twitter]!_

[npm-eslint-config]: https://npmjs.com/package/@bradgarropy/eslint-config
[twitter]: https://twitter.com/bradgarropy
[deprecate-guide]: https://docs.npmjs.com/unpublishing-packages-from-the-registry#when-to-deprecate
[unpublish-guide]: https://docs.npmjs.com/unpublishing-packages-from-the-registry#when-to-unpublish
[guide]: https://docs.npmjs.com/unpublishing-packages-from-the-registry
[policies]: https://npmjs.com/policies/unpublish
[unpublish]: https://docs.npmjs.com/cli/v6/commands/npm-unpublish
[deprecate]: https://docs.npmjs.com/cli/v6/commands/npm-deprecate
[publish]: https://docs.npmjs.com/cli/v6/commands/npm-publish
[version]: https://docs.npmjs.com/cli/v6/commands/npm-version
[blog]: https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions
[eslint-config-bradgarropy]: https://github.com/bradgarropy/eslint-config-bradgarropy
[eslint-config]: https://github.com/bradgarropy/eslint-config
[archive]: /images/posts/archive.png
[readme]: /images/posts/readme.png
[deprecated]: /images/posts/deprecated.png
