import type {FC, ReactNode} from "react"

type PageLayoutProps = {
    children?: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
    return (
        <main className="grid min-h-screen content-center justify-center py-0 px-5 font-text">
            {children}
        </main>
    )
}

export default PageLayout
