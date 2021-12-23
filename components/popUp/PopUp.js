import { useState } from "react"
import { Button } from "../button/button"
import { login } from "./authType"

const PopUp = ({ close }) => {

    const [registration, setRegistration] = useState(false)

    const closePopUp = () => {
        close()
    }

    const handleRegistration = () => {
        setRegistration(true)
    }

    return (
        <div className="popup">
            <div className="container">
                <h2 className="popup__title">
                    Login to your account
                </h2>
                <div className="popup__close-button" onClick={closePopUp}>
                    <span className="popup__close-icon"></span>
                    <span className="popup__close-icon"></span>
                </div>


                <div className="popup__content">
                    {/* {
                        registration ?
                            <>
                                registration
                            </> :
                            <>
                                <div className="registration__roll">
                                    etdg
                                </div>
                                {
                                    login.inputs.map((login) => {
                                        console.log(login);
                                        return (
                                            <form key={login.id} className="popup__form">
                                                <input
                                                    type={login.type}
                                                    placeholder={login.placeHolder}
                                                    className="popup__inputs"
                                                    key={login.id} />
                                                <span className="inputs__error">{login.error}</span>
                                            </form>

                                        );
                                    })
                                }
                            </>
                    } */}
                    <Button name="login" />
                    <p className="popup__register-link">
                        if you don't have an account, <span onClick={handleRegistration}>register</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PopUp