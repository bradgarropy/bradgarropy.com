import type {FC} from "react"

import FeaturedProjects from "~/components/FeaturedProjects"
import Hero from "~/components/Hero"
import LatestPosts from "~/components/LatestPosts"
import LatestVideos from "~/components/LatestVideos"
import Newsletter from "~/components/Newsletter"
import Podcasts from "~/components/Podcasts"
import Section from "~/components/Section"
import type {PostFrontmatter} from "~/types/post"
import type {Project} from "~/types/project"
import type {Video} from "~/types/video"

type HomeProps = {
    latestPosts: PostFrontmatter[]
    latestVideos: Video[]
    featuredProjects: Project[]
}

const Home: FC<HomeProps> = ({latestPosts, latestVideos, featuredProjects}) => {
    return (
        <div className="mt-16 grid gap-y-16 max-[700px]:m-0">
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

            <Section title="podcasts" link="https://webdevweekly.captivate.fm">
                <Podcasts />
            </Section>

            <Section title="newsletter" link="/newsletter">
                <Newsletter />
            </Section>
        </div>
    )
}

export default Home
