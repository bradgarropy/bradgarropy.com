import LinkButton from "components/LinkButton"
import PropTypes from "prop-types"

const PostEdit = ({slug}) => {
    const edit = `https://github.com/bradgarropy/bradgarropy.com/edit/master/content/posts/${slug}/index.md`

    return (
        <LinkButton href={edit} reverse>
            💻 edit on github
        </LinkButton>
    )
}

PostEdit.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostEdit
