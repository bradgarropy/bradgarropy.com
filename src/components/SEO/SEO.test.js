import SEO from "components/SEO"
import {useRouter} from "next/router"
import {render} from "test-utils/render"

jest.mock("next/router")

useRouter.mockReturnValue({pathname: "/blog/test"})

test("renders", () => {
    render(<SEO />)
})
