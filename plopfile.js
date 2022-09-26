const config = plop => {
    plop.load("./plop/generators/post.js")
    plop.load("./plop/generators/now.js")

    plop.load("@bradgarropy/plop-generator-react-component")
    plop.load("@bradgarropy/plop-generator-react-hook")
    plop.load("@bradgarropy/plop-generator-react-context")
}

module.exports = config
