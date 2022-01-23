import {renderHook} from "@testing-library/react-hooks"
import {useMarkdown} from "hooks"

test("renders hook", () => {
    const {result} = renderHook(() => useMarkdown())
    expect(result.current).toBeUndefined()
})
