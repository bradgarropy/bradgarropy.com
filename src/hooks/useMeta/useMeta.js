import {graphql, useStaticQuery} from "gatsby"

const useMeta = () => {
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
