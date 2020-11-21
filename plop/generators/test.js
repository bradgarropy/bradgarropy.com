const test = {
    prompts: [
        {
            type: "input",
            name: "name",
            message: "component name",
        },
    ],
    actions: [
        {
            type: "add",
            path:
                "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
            templateFile: "../templates/test.hbs",
        },
    ],
}

module.exports = test
