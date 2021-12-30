import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
    return (
        <div className="main__layout">
            <Header />
                {children}
            <Footer />
        </div>

    )
}

export default Layout