const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("plop-helper-date")
    plop.load("plop-helper-slugify")
    plop.load("plop-helper-bradgarropy")

    plop.setGenerator("post", {
        prompts: [
            {
                type: "input",
                name: "title",
                message: "post title",
            },
            {
                type: "input",
                name: "topic",
                message: "post topic",
            },
        ],
        actions: [
            {
                type: "add",
                path: "content/posts/{{slugify title}}/index.md",
                templateFile: "templates/post.hbs",
            },
        ],
    })

    plop.setGenerator("now", {
        prompts: [],
        actions: [
            {
                type: "add",
                path: "content/now/{{date}}.md",
                templateFile: "templates/now.hbs",
            },
        ],
    })
}

module.exports = generators
