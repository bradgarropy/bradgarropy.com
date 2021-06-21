import {graphql, useStaticQuery} from "gatsby"
import {getImage} from "gatsby-plugin-image"

const useTestimonials = () => {
    const query = graphql`
        {
            testimonials: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/testimonials/"}}
            ) {
                nodes {
                    frontmatter {
                        name
                        profile
                        photo {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 400
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                    quality: 100
                                )
                            }
                        }
                    }
                    html
                }
            }
        }
    `

    const data = useStaticQuery(query)

    const testimonials = data.testimonials.nodes.map(node => {
        return {
            name: node.frontmatter.name,
            profile: node.frontmatter.profile,
            photo: getImage(node.frontmatter.photo),
            html: node.html,
        }
    })

    return testimonials
}

export default useTestimonials
