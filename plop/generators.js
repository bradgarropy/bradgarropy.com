const generators = plop => {
    plop.load("@bradgarropy/plop-pack-helpers")
    plop.load("@bradgarropy/plop-pack-actions")

    plop.setDefaultInclude({
        actionTypes: false,
        generators: true,
        helpers: false,
        partials: false,
    })

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
                path: "content/posts/{{slug title}}/index.md",
                templateFile: "templates/frontmatter.hbs",
            },
        ],
    })
}

module.exports = generators
