---
title: 🧪 vscode test current file
slug: vscode-test-current-file
date: "2023-04-03"
topic: coding
---

[documentation][documentation]

`.vscode/tasks.json`  
`Tasks: Run Task`  
`test current file`

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

[documentation]: https://code.visualstudio.com/docs/editor/tasks
