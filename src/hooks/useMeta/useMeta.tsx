import {graphql, useStaticQuery} from "gatsby"
import {Meta} from "types/meta"

const useMeta = (): Meta => {
    const query = graphql`
        {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `

    const data = useStaticQuery(query)
    const {siteMetadata} = data.site

    return siteMetadata
}

export default useMeta
