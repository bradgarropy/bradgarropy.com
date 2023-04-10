---
title: ⏲ cron jobs with github actions
slug: cron-jobs-with-github-actions
date: "2022-10-05"
topic: coding
tags: ["github", "cron"]
---

I was looking for a free way to repeatedly run some tasks, and I remembered that [GitHub Actions][actions] now supports scheduled workflows. If you're not familiar with actions, check out the quickstart in the [documentation][actions-docs].

In order to run a workflow on a schedule, modify the `on` property of an existing workflow. Add the `schedule` event, and then one or more `cron` definitions underneath it. It should look like the example below.

```yaml
name: "⏲ scheduled workflow"

on:
    schedule:
        # utc time zone
        # daily @ 8am cst
        - cron: "0 13 * * *"
```

More information about the cron syntax can be found in the [schedule documentation][schedule]. I recommend using [crontab guru][crontab-guru] to help create schedules. It's important to note that GitHub Actions are based in the UTC time zone, so use this [UTC Converter][converter] to get the correct time for your time zone.

[schedule]: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule
[crontab-guru]: https://crontab.guru
[actions]: https://github.com/features/actions
[actions-docs]: https://docs.github.com/en/actions
[converter]: https://savvytime.com/converter/utc
