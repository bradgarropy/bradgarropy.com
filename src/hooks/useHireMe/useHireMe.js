import {graphql, useStaticQuery} from "gatsby"

const useHireMe = () => {
    const query = graphql`
        {
            hireMe: markdownRemark(
                fileAbsolutePath: {regex: "/content/pages/hire-me/"}
            ) {
                html
            }
        }
    `

    const {hireMe} = useStaticQuery(query)
    return hireMe.html
}

export default useHireMe
