const component = {
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
            path: "src/components/{{pascalCase name}}/index.js",
            templateFile: "../templates/index.hbs",
        },
        {
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
            templateFile: "../templates/component.hbs",
        },
        {
            type: "add",
            path:
                "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
            templateFile: "../templates/test.hbs",
        },
    ],
}

module.exports = component
