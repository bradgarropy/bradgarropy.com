---
title: 🟢 profiling node scripts
slug: profiling-node-scripts
date: "2022-09-13"
topic: coding
tags: ["node", "performance"]
---

If you're looking to improve the performance of a [Node.js][node] script, a [flamegraph][flamegraph] is a great way to visualize where time is spent during execution.

Node supports generating data from scripts that is required to create a flamegraph. To start profiling a script, run it with the `inspect` command to begin a debugging session.

```zsh
node inspect index.js
```

You'll see that Node starts an interactive debugging session, halted at the first line of your script. Here you can run the script as many times as you need with features like breakpoints and step by step execution. Type `help` at the `debug>` prompt to see all available options.

![node devtools][node-devtools]

In order to view the flamegraph, open the Node.js DevTools in Chrome by clicking the green Node.js icon in the top left of the DevTools window. This will open open a window where you can select your JavaScript VM instance to record.

![profiler][profiler]

To begin profiling, click the blue _Start_ button at the bottom of the _Profiler_ tab. Then go to your terminal and type `cont` to continue your script execution. Once completed, go back to the _Profiler_ tab and click _Stop_.

Then you'll see an interactive flamegraph that you can use to view which function calls took the most time during the execution. It can be viewed as a chart, a tree, or a list, but I prefer the chart.

![flamegraph chart][flamegraph-chart]

Between each profiling run, you must clear all profiles in the _Profiler_ tab and restart your Node debugger with the `restart` command. Then go back and select your JavaScript VM instance to begin profiling again.

While I found the restart process to be a little inconvenient, it was the most reliable way to get a profile capture across multiple runs of my script.

[node]: https://nodejs.org
[flamegraph]: https://brendangregg.com/flamegraphs.html
[node-devtools]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/node-devtools.png
[profiler]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/profiler.png
[flamegraph-chart]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/flamegraph-chart.png
