const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("plop-helper-bradgarropy")
    plop.load("@bradgarropy/plop-pack-helpers")
    plop.load("@bradgarropy/plop-pack-actions")

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
                templateFile: "templates/frontmatter.hbs",
            },
        ],
    })
}

module.exports = generators
