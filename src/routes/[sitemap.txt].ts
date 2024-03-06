import {generateSitemap} from "~/utils/sitemap"

export const loader = async () => {
    const sitemap = await generateSitemap()
    return new Response(sitemap)
}
