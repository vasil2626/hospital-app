import Img from "next/image";
import { useRouter } from "next/router";
import logOut from "../../../Assets/profile/head/log-out.png"

const ProfileHead = () => {

    const router = useRouter()

    const handleLogOut = () =>{
        router.push("/")
    }

    return (
        <div className="profile__head">
            <div className="profile__user">
                <span className="profile__user-email">
                   <span className="--email"> user@email.com</span>
                </span>
            </div>
            <div className="profile__head-logout">
                <span className="log-out__text" onClick={handleLogOut}>Log out</span>
                <Img src={logOut} alt ="log-out" height={25} width={25} />
            </div>
        </div>
    );
}

export default ProfileHead