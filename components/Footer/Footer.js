import Img from "next/image";
import Link from "next/link";
import footerLogo from "../../Assets/navbar/logo.png"
import lin from "../../Assets/socialmedia/linkedin.svg"
import fb from "../../Assets/socialmedia/facebook.svg"
import ig from "../../Assets/socialmedia/instagram.svg"
import vk from "../../Assets/socialmedia/vkontakte.svg"


 
const Footer = () => {

    const date = new Date()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__links">
                        <h1 className="Links__title">USEFUL LINKS</h1>
                        <Link href={"/"} ><a className="link__items"> https://www.collinstionary.com/dictionary </a></Link>
                        <Link href={"/"} ><a className="link__items"> https://www.collinstionary.com/dictionary </a></Link>
                        <Link href={"/"} ><a className="link__items"> https://www.collinstionary.com/dictionary </a></Link>
                    </div>
                    <div className="footer__logo">
                        <Img src={footerLogo} alt="img"/>
                        <span className="footer__copyright">copyright {date.getFullYear()} </span>
                        <ul className="footer__social-media">
                            <li className="social__media-items"><Img src={lin} height={20} width={20}/></li>
                            <li className="social__media-items"><Img src={ig} height={20} width={20}/></li>
                            <li className="social__media-items"><Img src={fb} height={20} width={20}/></li>
                            <li className="social__media-items"><Img src={vk} height={20} width={20}/></li>
                        </ul>
                    </div>
                    <div className="footer__info">
                        <h1 className="footer__info-title">Lorem, ipsum .</h1>
                        <p className="footer__info-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Repellendus ducimus rerum accusantium ratione ullam.
                            Odio voluptate corrupti
                            sint veritatis neque quaerat dolor quia tempora ex.</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer


