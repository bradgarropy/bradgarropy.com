const now = {
    prompts: [],
    actions: [
        {
            type: "add",
            path: "content/now/{{date}}.md",
            templateFile: "../templates/now.hbs",
        },
    ],
}

module.exports = now
