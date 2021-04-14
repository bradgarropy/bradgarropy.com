import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const PostTitleWrapper = styled.div`
    h1 {
        margin: 0rem;
        font-size: 2.5rem;
        line-height: 1.1;

        @media (max-width: 750px) {
            font-size: 1.75rem;
            line-height: 1.3;
        }
    }

    a {
        color: var(--black);

        :hover {
            color: var(--primary);
        }
    }
`

const PostTitle = ({title, slug}) => {
    return (
        <PostTitleWrapper>
            <h1>{slug ? <Link to={`/blog/${slug}`}>{title}</Link> : title}</h1>
        </PostTitleWrapper>
    )
}

PostTitle.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
}

export default PostTitle
