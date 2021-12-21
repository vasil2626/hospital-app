import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./main/Main"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>

    )
}

export default Layout