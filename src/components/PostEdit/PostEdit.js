import PropTypes from "prop-types"
import LinkButton from "components/LinkButton"

const PostEdit = ({slug}) => {
    const edit = `https://github.com/bradgarropy/bradgarropy.com/edit/master/content/posts/${slug}/index.md`

    return (
        <LinkButton to={edit} reverse>
            💻 edit on github
        </LinkButton>
    )
}

PostEdit.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostEdit
