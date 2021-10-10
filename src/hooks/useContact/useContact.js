import {graphql, useStaticQuery} from "gatsby"

const useContact = () => {
    const query = graphql`
        {
            contact: markdownRemark(
                fileAbsolutePath: {regex: "/content/pages/contact/"}
            ) {
                html
            }
        }
    `

    const {contact} = useStaticQuery(query)
    return contact.html
}

export default useContact
