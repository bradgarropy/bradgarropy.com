import FeaturedProjects from "components/FeaturedProjects"
import Hero from "components/Hero"
import LatestPosts from "components/LatestPosts"
import LatestVideos from "components/LatestVideos"
import Newsletter from "components/Newsletter"
import Podcast from "components/Podcast"
import Section from "components/Section"
import {FC} from "react"
import {PostFrontmatter} from "types/post"
import {Project} from "types/project"
import {Video} from "types/video"

import styles from "./Home.module.css"

type HomeProps = {
    latestPosts: PostFrontmatter[]
    latestVideos: Video[]
    featuredProjects: Project[]
}

const Home: FC<HomeProps> = ({latestPosts, latestVideos, featuredProjects}) => {
    return (
        <div className={styles.sections}>
            <Hero />

            <Section title="blog" link="/blog">
                <LatestPosts latestPosts={latestPosts} />
            </Section>

            <Section title="videos" link="https://youtube.com/bradgarropy">
                <LatestVideos latestVideos={latestVideos} />
            </Section>

            <Section title="projects" link="https://github.com/bradgarropy">
                <FeaturedProjects featuredProjects={featuredProjects} />
            </Section>

            <Section title="podcast" link="https://webdevweekly.captivate.fm">
                <Podcast />
            </Section>

            <Section title="newsletter" link="/newsletter">
                <Newsletter />
            </Section>
        </div>
    )
}

export default Home
