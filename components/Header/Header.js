import { useEffect, useState } from "react";
import logo from "../../Assets/navbar/logo.png";
import Image from 'next/image'
import { data } from "./data"
import PopUp from "../popUp/PopUp";

const Header = () => {

    const lines = Array.of(1, 2, 3)

    const [menuOpen, setMenuOpen] = useState(false)

    const [openPopUp, setOpenPopUp] = useState(false)

    const handleResize = (e) => {
        console.log(e.srcElement.innerWidth);
        const { innerWidth } = e.srcElement
        if (innerWidth >= 826) {
            setMenuOpen(false)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute("href")
        const location = document.querySelector(target).offsetTop
        const topPosition = location - 200
        window.scrollTo({
            left: 0,
            top: topPosition
        })
    }

    const loginHandler = () => {
        setOpenPopUp(true)
    }

    const onClose = () =>{
        setOpenPopUp(false)
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
                            data.map((routs) => {
                                return <li
                                    className={!menuOpen ? "nav-items" : "nav__items-mobile"}
                                    key={routs.id}
                                >
                                    <a href={routs.url} onClick={handleClick}>{routs.section}</a>
                                </li>
                            })
                        }
                    </ul>
                    <div className="nav__auth">
                        <ul className="nav__auth-list">
                            <li className="nav__auth-items">login</li>
                            <li className="nav__auth-items"></li>
                            <li className="nav__auth-items" onClick={loginHandler}>clinics</li>
                            <li className="nav__auth-items">requestor</li>
                        </ul>
                    </div>
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
            {
                openPopUp && 
                <PopUp 
                close={onClose}
                />
            }
        </nav>
    );
}

export default Header