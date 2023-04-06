---
title: 🏁 manually trigger github actions
slug: manually-trigger-github-actions
date: "2022-10-05"
topic: coding
tags: []
---

Most [GitHub Actions][actions] run automatically when things happen in the repository. Events like pushes, pull requests, issues, forks, and releases are the most common. But if you've ever wanted to kick off a workflow manually, that is also supported.

To enable a workflow to be run manually, add the `workflow_dispatch` entry to the `on` property. As a result, your action will now have a _Run workflow_ button as shown below.

```yaml
name: "🏁 manually triggered workflow"

on: workflow_dispatch
```

![manual][manual]

Some actions require inputs, so manually triggered workflows also have the ability to accept inputs. Inputs can be added by adding an `inputs` entry underneath the `workflow_dispatch` property. Each input has a key, which is mapped directly to the [input context][input-context]. They also have a few other nested properties as shown below.

```yaml
name: "🏁 manually triggered workflow"

on:
    workflow_dispatch:
        inputs:
            firstName:
                description: "Your first name"
                type: string
                default: Brad
                required: true
```

Now the _Run workflow_ button on your action will show a dialog with all of the inputs listed for you to fill out manually before triggering the run.

![manual inputs][manual-inputs]

As an added bonus, the [GitHub CLI][cli] also supports workflow commands. Workflows can be viewed, started, and monitored from your terminal. Use the command below to manually trigger a workflow from the CLI. It walks you through selecting the workflow and adding inputs.

```bash
gh workflow run
```

![github cli][workflow-cli]

For more information about manually triggering workflows, check the [documentation][workflow-dispatch] or hit me up on [Twitter][twitter]!

[actions]: https://github.com/features/actions
[input-context]: https://docs.github.com/en/actions/learn-github-actions/contexts#inputs-context
[manual]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/manual.png
[manual-inputs]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/manual-inputs.png
[workflow-dispatch]: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch
[workflow-cli]: https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/posts/workflow-cli.png
[cli]: https://cli.github.com
[twitter]: https://twitter.com/bradgarropy
