---
title: 👨🏼‍🔬 labman
slug: labman
date: "2020-02-10"
topic: coding
---

Nowadays I use [GitHub][github] quite a bit. I'm always making new [repositories][repos], improving my project management skills, and open sourcing more [packages][packages]. One crucial part of my project management strategy is tracking work through [issues][issues] and organizing them with labels.

But each time I start a new repository, I have to manually recreate my labels. Out of the box [GitHub][github] doesn't support copying labels, so I created [labman][labman].

https://youtu.be/l7BmkU9z4BE

[labman][labman] is a CLI tool that clones issue labels from repository to repository. I made it executable with `npx`, so there is no overhead to get up and running. I also wanted to be crystal clear about the changes it makes to your labels, so I included some colored command line output. I made this all happen with the following technologies.

-   [node][node]
-   [npx][npx]
-   [octokit][octokit]
-   [yargs][yargs]
-   [chalk][chalk]

So if you spin up a lot of new projects, or just want consistent issue labels across your repositories, give [labman][labman] a shot! I even created my own [labels][labels] repository as a template for the labels I like.

[github]: https://github.com/bradgarropy
[repos]: https://github.com/bradgarropy?tab=repositories
[packages]: https://www.npmjs.com/~bradgarropy
[issues]: https://github.com/issues
[labman]: https://www.npmjs.com/package/labman
[usage]: https://raw.githubusercontent.com/bradgarropy/labman-cli/master/usage.gif
[node]: https://nodejs.org
[npx]: https://www.npmjs.com/package/npx
[octokit]: https://developer.github.com/v3/libraries
[yargs]: https://yargs.js.org
[chalk]: https://github.com/chalk/chalk
[labels]: https://github.com/bradgarropy/labels/labels
