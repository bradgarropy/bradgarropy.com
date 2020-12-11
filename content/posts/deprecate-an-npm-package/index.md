---
title: 🟥 deprecate an npm package
slug: deprecate-an-npm-package
date: 2020-12-10
topic:
    name: coding
    icon: 💻
---

1. Add a deprecation message to the readme.
2. Publish one last patch version to npm.
3. Archive the github repository.
4. Use the npm cli to deprecate the package.

![deprecation message][readme]
![archive button][archive]

```bash
npm deprecate eslint-config-bradgarropy "This package is deprecated."
```

The deprecation message will show up when a user installs your package.

[archive]: /images/archive.png
[readme]: /images/readme.png
