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
