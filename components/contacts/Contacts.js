import { useState, useEffect } from "react";
import { sendMessage } from "../../redux/actions/sendMessageAction/sendMessageAction"
import { useDispatch, useSelector } from "react-redux";
import Img from "next/image";
import Heading from "../Heading/Heading"
import tel from "../../Assets/contacts/contacts-icon/tell.png"
import email from "../../Assets/contacts/contacts-icon/email.png"
import address from "../../Assets/contacts/contacts-icon/adress.png"

const Contacts = () => {

    const dispatch = useDispatch()

    const { success } = useSelector(state => state.sendMessageReducer)

    const [buttonClick, setButtonClick] = useState({
        name: "send",
        clicked: false
    })

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    const handleSubmit = () => {
        if (inputValues.name !== "" && inputValues.email !== "" && inputValues.phone !== "" && inputValues.message !== "") {
            dispatch(sendMessage(inputValues))
        }
        return

    }

    useEffect(() => {
        if (success) {
            setButtonClick({
                ...buttonClick,
                name: "thank you",
                clicked: true
            })
        }
    }, [success])


    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <Heading head="contacts" />
                <div className="contacts__content">
                    <form
                        onChange={handleChange}
                        className="contacts__form"
                    >
                        <input
                            required
                            defaultValue={inputValues.name}
                            type="text"
                            name="name"
                            placeholder="name"
                            className="contacts__input" />
                        <input
                            required
                            defaultValue={inputValues.email}
                            type="email"
                            name="email"
                            placeholder="email"
                            className="contacts__input"
                        />
                        <input
                            required
                            defaultValue={inputValues.phone}
                            type="text"
                            name="phone"
                            placeholder="phone"
                            className="contacts__input" />
                        <textarea
                            required
                            defaultValue={inputValues.message}
                            name="message"
                            placeholder="message"
                            className="contacts__message-area" />
                        <button
                            className={!buttonClick.clicked ? "form__submit" : "form__submit-clicked"}
                            onClick={handleSubmit}
                        >
                            {buttonClick.name}
                        </button>
                    </form>
                    <ul className="contacts__info">
                        <li className="info__items"> <Img src={tel} height={22} width={22} alt="img" /> <span >+374 000 000</span> </li>
                        <li className="info__items"><Img src={email} height={22} width={22} alt="img" /> <span >m@gmail.com</span> </li>
                        <li className="info__items"> <Img src={address} height={22} width={22} alt="img" /> <span >address</span> </li>
                    </ul>
                    <div className="contacts__image"></div>
                </div>
            </div>
        </section>
    );
}

export default Contacts