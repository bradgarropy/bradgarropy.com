const generator = plop => {
    plop.load("plop-helper-date")
    plop.load("plop-helper-slugify")
    plop.load("plop-helper-bradgarropy")

    plop.setDefaultInclude({generators: true})

    plop.setGenerator("post", {
        prompts: [
            {
                type: "input",
                name: "title",
                message: "post title",
            },
            {
                type: "list",
                name: "topic",
                message: "post topic",
                choices: ["coding", "life", "tech"],
            },
            {
                type: "input",
                name: "tags",
                message: "post tag",
                filter: input => {
                    if (!input) {
                        return ""
                    }

                    const filteredInput = input
                        .split(" ")
                        .map(item => `"${item}"`)
                        .join(", ")

                    return filteredInput
                },
            },
        ],
        actions: [
            {
                type: "add",
                path: "content/posts/{{slugify title}}.md",
                templateFile: "../templates/post.hbs",
            },
        ],
    })
}

module.exports = generator
