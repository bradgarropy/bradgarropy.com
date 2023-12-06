import {render, screen} from "@testing-library/react"

import Home from "~/components/Home"
import {
    mockPostsFrontmatter,
    mockProjects,
    mockVideos,
} from "~/test-utils/mocks"

test("shows home page", () => {
    render(
        <Home
            latestPosts={mockPostsFrontmatter}
            latestVideos={mockVideos}
            featuredProjects={mockProjects}
        />,
    )

    expect(screen.getByText("i'm brad garropy")).toBeInTheDocument()
    expect(screen.getByText("blog")).toBeInTheDocument()
    expect(screen.getByText("videos")).toBeInTheDocument()
    expect(screen.getByText("projects")).toBeInTheDocument()
    expect(screen.getByText("podcasts")).toBeInTheDocument()
})
