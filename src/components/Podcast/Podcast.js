import {StaticImage} from "gatsby-plugin-image"
import {usePodcast} from "hooks"
import styled from "styled-components"

const PodcastWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
`

const Description = styled.div`
    display: grid;
    align-content: center;

    p {
        margin: 0rem;
    }
`

const Hosts = styled.div`
    display: grid;
    column-gap: 0.75rem;
    grid-auto-flow: column;
    align-items: center;
`

const Host = styled.a`
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
`

const Divider = styled.span`
    font-size: 3rem;
    font-weight: 900;
`

const CoverImage = styled.div`
    .cover-image-container {
        overflow: visible;
    }

    .cover-image {
        box-sizing: border-box;
        border-radius: 0.5rem;
        border: 2px solid ${({theme}) => theme.colors.black};
        background-color: ${({theme}) => theme.colors.black};
        box-shadow: 3px 3px 0 ${({theme}) => theme.colors.black};
        transition: all 300ms;
    }

    .cover-image:hover {
        box-shadow: none;
    }
`

const Podcast = () => {
    const podcast = usePodcast()
    console.log(podcast)

    return (
        <PodcastWrapper>
            <CoverImage>
                <StaticImage
                    src="../../../static/web-dev-weekly.png"
                    alt={podcast.title}
                    width={175}
                    aspectRatio={1}
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                    className="cover-image-container"
                    imgClassName="cover-image"
                />
            </CoverImage>

            <Description>
                <p>a weekly podcast about web development hosted by</p>

                <Hosts>
                    <Host
                        href="https://twitter.com/bradgarropy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        brad garropy
                    </Host>

                    <Divider>/</Divider>

                    <Host
                        href="https://twitter.com/RGottleber"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        richard gottleber
                    </Host>
                </Hosts>
            </Description>
        </PodcastWrapper>
    )
}

export default Podcast
