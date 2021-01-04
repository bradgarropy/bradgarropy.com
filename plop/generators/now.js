const now = {
    prompts: [],
    actions: [
        {
            type: "add",
            path: "content/now/{{date}}.md",
        },
    ],
}

module.exports = now
