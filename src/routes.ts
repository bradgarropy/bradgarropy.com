import {flatRoutes} from "@remix-run/fs-routes"

const routes = flatRoutes({
    ignoredRouteFiles: ["**/*.test.{ts,tsx}"],
})

export default routes
