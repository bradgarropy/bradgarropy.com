import type {FC, ReactNode} from "react"

type PageLayoutProps = {
    children?: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
    return (
        <main className="grid min-h-screen content-center justify-center px-5 py-0 font-text text-black transition-all dark:text-white">
            {children}
        </main>
    )
}

export default PageLayout
