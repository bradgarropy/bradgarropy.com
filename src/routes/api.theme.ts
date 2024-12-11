import {type ActionFunctionArgs, data} from "@remix-run/node"

import type {Theme} from "~/types/theme"
import {setTheme} from "~/utils/session.server"

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const theme = formData.get("theme") as Theme
    const cookie = await setTheme(theme, request)

    return data({}, {headers: {"Set-Cookie": cookie}})
}
