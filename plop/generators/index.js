const now = require("./now")
const post = require("./post")
const test = require("./test")
const component = require("./component")

const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("plop-helper-date")
    plop.load("plop-helper-slugify")
    plop.load("plop-helper-bradgarropy")

    plop.setGenerator("post", post)
    plop.setGenerator("now", now)
    plop.setGenerator("component", component)
    plop.setGenerator("test", test)
}

module.exports = generators
