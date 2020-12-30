import fs from "fs"
import path from "path"
import {parseMarkdown} from "utils/markdown"

const getPage = async slug => {
    const pagePath = path.join(process.cwd(), `content/pages/${slug}/index.md`)
    const file = fs.readFileSync(pagePath, "utf8")
    const page = parseMarkdown(file)

    return page
}

export {getPage}
