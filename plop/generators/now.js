const generator = plop => {
    plop.load("plop-helper-date")

    plop.setDefaultInclude({generators: true})

    plop.setGenerator("now", {
        prompts: [],
        actions: [
            {
                type: "add",
                path: "content/now/{{date}}.md",
                templateFile: "../templates/now.hbs",
            },
        ],
    })
}

export default generator
