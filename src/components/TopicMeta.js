import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TopicMetaWrapper = styled.div`
    margin: 2.5rem 0rem 3.75rem 0rem;
    text-align: center;

    h1 {
        margin: 0rem;
    }
`

const TopicMeta = ({topic}) => {
    const {name, icon} = topic

    return (
        <TopicMetaWrapper>
            <h1>
                {icon} {name}
            </h1>
        </TopicMetaWrapper>
    )
}

TopicMeta.propTypes = {
    topic: PropTypes.object.isRequired,
}

export default TopicMeta
