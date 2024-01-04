const config = async plop => {
    await plop.load("./plop/generators/post.js")
    await plop.load("./plop/generators/now.js")

    // plop.load("@bradgarropy/plop-generator-react-component")
    // plop.load("@bradgarropy/plop-generator-react-hook")
    // plop.load("@bradgarropy/plop-generator-react-context")
}

export default config
