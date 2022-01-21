import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../button/button"
import { login, register } from "./authType"
import { registerAction } from "../../redux/actions/registerAction/registerAction"
import { useSelector } from "react-redux"


const PopUp = ({ close, rol }) => {

    const [registration, setRegistration] = useState(false)

    const [registerRol, setRegisterRol] = useState()

    const [inputValues, setInputValues] = useState({})

    const { error, success, popUpData } = useSelector(state => state.registerReducer)
    console.log("🚀 ~ file: PopUp.js ~ line 19 ~ PopUp ~ popUpData", popUpData)


    const dispatch = useDispatch()

    const rout = useRouter()

    const closePopUp = () => {
        close()
    }

    const handelKyPress = (e) => {
        if (e.keyCode === 27) {
            closePopUp()
        }
    }

    const buttonClick = () => {
        // rout.push("/user/1")
        // close()

        dispatch(registerAction(rol, inputValues))

        if (!success){
            registerRol.error = error
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    useEffect(() => {
        if (rol === "clinics") {
            dispatch(registerAction(register.inputsClinic))
        } else if (rol === "requestors") {
            dispatch(registerAction(register.inputsRequestor))
        }
    },[popUpData])

    useEffect(() => {
        window.addEventListener("keydown", handelKyPress)
        return () => {
            window.removeEventListener("keydown", handelKyPress)
        }
    })


    return (
        <section className="popup__section">
            <div className="popup__background" onClick={() => close()} />
            <div className="popup">
                <div className="container">
                    <div className="popup__content">
                        {
                            registration ?
                                <h2 className="popup__title">
                                    {register.title}
                                </h2> :
                                <h2 className="popup__title">
                                    {login.title}
                                </h2>
                        }
                        <div className="popup__close-button" onClick={closePopUp}>
                            <span className="popup__close-icon"></span>
                            <span className="popup__close-icon"></span>
                        </div>
                        <div className="popup__form">
                            {
                                registration ?
                                    <>
                                        <span className="popup__link-ref">go back to <span
                                            className="register__link"
                                            onClick={() => setRegistration(false)}>login</span>
                                        </span>
                                        <div className="rol__title">
                                            {rol}
                                        </div>
                                        {popUpData?.map((register) => {
                                            return (
                                                <form className="register__form" key={register.id} onChange={handleChange}>
                                                    <input type={register.type} placeholder={register.placeHolder} className="form__inputs" name={register.name} required />
                                                    <span className="inputs__error">{register.error}</span>

                                                </form>
                                            );
                                        })}
                                    </> :
                                    <>
                                        <div className="rol__title">
                                            {rol}
                                        </div>
                                        {
                                            login.inputs.map((login) => {
                                                return (
                                                    <form className="login__form" key={login.id} typeof="submit">
                                                        <input type={login.type} placeholder={login.placeHolder} className="form__inputs" />
                                                        <span className="inputs__error">{login.error}</span>
                                                    </form>
                                                );
                                            })
                                        }
                                    </>
                            }
                            <div className="popup__bottom">
                                <Button
                                    name={registration ? `${register.button}` : `${login.button}`}
                                    onClick={buttonClick}
                                />
                                {
                                    !registration &&
                                    <div className="popup__link-ref">
                                        <span>if you don't not have an account</span>
                                        <span className="register__link" onClick={() => setRegistration(true)}>register</span></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PopUp