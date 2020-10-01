import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"

const Now = styled.div`
    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }

    .headline {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        .date {
            font-style: italic;
        }
    }

    .inspiration {
        margin-block-start: 4rem;
        text-align: end;
        font-style: italic;
    }
`

const NowPage = ({data}) => {
    const {html, frontmatter} = data.now

    return (
        <Layout>
            <SEO title="🧭 now" description="" />

            <Now>
                <div className="headline">
                    <h1>🧭 now</h1>
                    <span className="date">{`${frontmatter.date.toLowerCase()}`}</span>
                </div>

                <div dangerouslySetInnerHTML={{__html: html}} />

                <p className="inspiration">
                    inspired by{" "}
                    <a href="https://twitter.com/sivers">derek sivers</a> and{" "}
                    <a href="https://nownownow.com/about">nownownow</a>
                </p>
            </Now>
        </Layout>
    )
}

NowPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        now: markdownRemark(fileAbsolutePath: {regex: "/content/now/"}) {
            html
            frontmatter {
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`

export default NowPage
