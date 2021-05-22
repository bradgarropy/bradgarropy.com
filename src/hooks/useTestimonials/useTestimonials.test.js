import {renderHook} from "@testing-library/react-hooks"
import {useStaticQuery} from "gatsby"
import {useTestimonials} from "hooks"
import {mockTestimonials, mockTestimonialsQuery} from "test-utils/mocks"

useStaticQuery.mockReturnValue(mockTestimonialsQuery)

test("returns testimonials", () => {
    const {result} = renderHook(() => useTestimonials())
    expect(result.current).toEqual(mockTestimonials)
})
