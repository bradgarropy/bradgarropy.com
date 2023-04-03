---
title: 🧪 vscode test current file
slug: vscode-test-current-file
date: "2023-04-03"
topic: coding
---

[documentation][documentation]

```json
{
    "label": "test current file",
    "type": "shell",
    "command": "npm run test ${fileBasenameNoExtension}.test${fileExtname}",
    "group": "test",
    "presentation": {
        "clear": true,
        "close": false,
        "echo": true,
        "panel": "dedicated",
        "reveal": "always",
        "showReuseMessage": true
    },
    "runOptions": {
        "runOn": "default"
    }
}
```

[documentation]: https://code.visualstudio.com/docs/editor/tasks
