import Footer from "components/Footer"
import Header from "components/Header"
import type {FC, ReactNode} from "react"

type LayoutProps = {
    children?: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="m-auto grid min-h-screen max-w-5xl grid-rows-[auto_1fr_auto] gap-y-10 font-text text-black transition-all dark:text-white">
            <Header />

            <main className="box-border grid w-full max-w-[700px] justify-self-center py-0 px-5">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout
