const post = {
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
            path: "content/posts/{{slugify title}}.md",
            templateFile: "../templates/post.hbs",
        },
    ],
}

module.exports = post
