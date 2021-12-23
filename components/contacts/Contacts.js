import Img from "next/image";
import Heading from "../Heading/Heading"
import tel from "../../Assets/contacts/contacts-icon/tell.png"
import email from "../../Assets/contacts/contacts-icon/email.png"
import address from "../../Assets/contacts/contacts-icon/adress.png"


const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <Heading head="contacts" />
                <div className="contacts__content">
                    <div className="contacts__form">
                        <input type="email" name="email" placeholder="email" className="contacts__input" />
                        <input type="text" name="subject" placeholder="subject" className="contacts__input" />
                        <textarea name="message" placeholder="message" className="contacts__message-area" />
                        <button className="form__submit">
                            send
                        </button>
                    </div>

                    <ul className="contacts__info">
                        <li className="info__items"> <Img src={tel} height={22} width={22}/> <span >+374 000 000</span> </li>
                        <li className="info__items"><Img src={email} height={22} width={22}/> <span >m@gmail.com</span> </li>
                        <li className="info__items"> <Img src={address} height={22} width={22}/> <span >address</span> </li>
                    </ul>
                    <div className="contacts__image"></div>
                </div>
            </div>
        </section>
    );
}

export default Contacts