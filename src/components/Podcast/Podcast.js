import Link from "components/Link"
import {StaticImage} from "gatsby-plugin-image"
import {usePodcast} from "hooks"
import styled from "styled-components"

const PodcastWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    justify-content: start;
    align-items: center;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const Description = styled.div`
    display: grid;
    justify-items: start;
    color: var(--black);
`

const Badge = styled.span`
    margin: 0rem 0rem 0.75rem 0rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: -0.075rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    border: 3px solid var(--black);
`

const Hosts = styled.div`
    display: grid;
    column-gap: 0.75rem;
    grid-auto-flow: column;
    align-items: center;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: -0.075rem;
    line-height: 1.6;

    @media (max-width: 700px) {
        font-size: 1.4rem;
    }
`

const Host = styled(Link)`
    color: var(--black);

    :hover {
        text-shadow: 2px 2px var(--primary);
    }
`

const CoverImage = styled(Link)`
    .cover-image-container {
        overflow: visible;
    }

    .cover-image {
        box-sizing: border-box;
        border-radius: 0.5rem;
        border: 2px solid var(--black);
        background-color: var(--black);
        box-shadow: 3px 3px 0 var(--black);
        transition: all 300ms !important;
    }

    .cover-image:hover {
        box-shadow: none;
    }

    @media (max-width: 700px) {
        width: 75%;
    }
`

const Podcast = () => {
    const podcast = usePodcast()

    return (
        <PodcastWrapper>
            <CoverImage to={podcast.link} data-testid={podcast.title}>
                <StaticImage
                    src="../../../static/web-dev-weekly.png"
                    alt={podcast.title}
                    layout="constrained"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                    className="cover-image-container"
                    imgClassName="cover-image"
                />
            </CoverImage>

            <Description>
                <Badge>coming soon</Badge>

                <span>a weekly podcast about web development hosted by</span>

                <Hosts>
                    <Host to="https://twitter.com/bradgarropy">
                        brad garropy
                    </Host>

                    <span>/</span>

                    <Host to="https://twitter.com/RGottleber">
                        richard gottleber
                    </Host>
                </Hosts>
            </Description>
        </PodcastWrapper>
    )
}

export default Podcast
