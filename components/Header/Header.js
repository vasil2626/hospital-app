import { useEffect, useState } from "react";
import logo from "../../Assets/navbar/logo.png";
import Image from 'next/image'

const Header = () => {

    const routs = ["home", "about us", "services", "news", "contacts"]

    const lines = Array.of(1, 2, 3)

    const [menuOpen, setMenuOpen] = useState(false)

    const handleResize = (e) => {
        console.log(e.srcElement.innerWidth);
        const { innerWidth } = e.srcElement
        if (innerWidth >= 826) {
            setMenuOpen(false)
        }
    }

    const handleClick = (e) =>{
        console.log(e);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__content">
                    <div className="nav-logo">
                        <Image
                            src={logo}
                            alt="logo"
                            width={94}
                            height={42}
                        />
                    </div>
                    <ul className={!menuOpen ? "nav__content-list" : "nav__content-side"} >
                        {
                            routs.map((routs, i) => {
                                return <li className={!menuOpen ? "nav-items" : "nav__items-mobile"} key={i} onClick={handleClick}>{routs}</li>
                            })
                        }
                    </ul>
                    <button className={"nav__login-button"} >login</button>
                    <div className="nav__burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="burger__icon">
                            {
                                lines.map((i) => {
                                    return (
                                        <div className={!menuOpen ? "burger__lines" : "burger__lines-close"} key={i}></div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default Header