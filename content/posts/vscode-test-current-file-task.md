---
title: 🧪 vscode test current file task
slug: vscode-test-current-file-task
date: "2023-04-03"
topic: coding
---

While setting up a new project at [Atlassian][atlassian], I decided to dive into some `vscode` workspace settings to see how I could improve the developer experience. I found the [task][tasks] system to be pretty interesting and extensible, so I created a custom task to run tests against the currently open file.

Custom task definitions are placed in `.vscode/tasks.json`. Most of the fields are straightforward, but the `command` property has some interesting bits. There are all sorts of [variables][variables] you can use to get information about the current file and directory you're in. You can also do things like run a task when a workspace is opened with the `runOn` property. Here's what my task definition looked like.

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "test current file",
            "type": "shell",
            "command": "npm run test ${fileBasenameNoExtension}.test${fileExtname}",
            "group": "test",
            "presentation": {
                "clear": true,
                "close": false,
                "panel": "dedicated"
            }
        }
    ]
}
```

To run this task, open up the command palette by pressing `Cmd+P`. Then select `Tasks: Run Tasks` to view a list of custom tasks. Finally, choose the `test current file` task from the list. If you ask me, this is a much better workflow than executing `npm run test` and then entering in the exact file path you're looking for.

[tasks]: https://code.visualstudio.com/docs/editor/tasks
[atlassian]: https://www.atlassian.com
[variables]: https://code.visualstudio.com/docs/editor/tasks#_variable-substitution
