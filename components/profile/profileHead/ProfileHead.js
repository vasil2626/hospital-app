import Img from "next/image";
import {useState} from "react"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openSideBar } from "../../../redux/actions/sideBarAction/sideBarAction"
import logOut from "../../../Assets/profile/head/log-out.png"

const ProfileHead = () => {

    const [isOpen, setIsOPen] = useState(false)

    const router = useRouter()

    const dispatch = useDispatch()

    const handleLogOut = () => {
        router.push("/")
    }

    const handleClick = () => {
        console.log("click");
        setIsOPen(!isOpen)
        dispatch(openSideBar(isOpen))
    }

    return (
        <div className="profile__head">
            <div className="open__side-bar" onClick={handleClick}></div>
            <div className="profile__user">
                <span className="profile__user-email">
                    <span className="--email"> user@email.com</span>
                </span>
            </div>
            <div className="profile__head-logout">
                <span className="log-out__text" onClick={handleLogOut}>Log out</span>
                <Img src={logOut} alt="log-out" height={25} width={25} />
            </div>
        </div>
    );
}

export default ProfileHead