import {graphql, useStaticQuery} from "gatsby"

const useResume = (): string => {
    const query = graphql`
        {
            resume: markdownRemark(
                fileAbsolutePath: {regex: "/content/pages/resume/"}
            ) {
                html
            }
        }
    `

    const {resume} = useStaticQuery(query)
    return resume.html
}

export default useResume
