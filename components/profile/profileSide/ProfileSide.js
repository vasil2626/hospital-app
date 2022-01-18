import Img from "next/image";
import sideLogo from "../../../Assets/profile/side/side-logo.png"
import help from "../../../Assets/profile/side/help.png"
import SideTabs from "../sideTabs/sideTabs";
import {useState, useEffect} from "react"
import { useSelector } from "react-redux";

const ProfileSide = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const {isOpen} = useSelector(state => state.openBarReducer)

    const handleReSize = (e) =>{
        console.log(e.target.innerWidth);
        setWindowSize(e.innerWidth)
    }

    useEffect(() =>{
        window.addEventListener("resize", handleReSize)

        return () =>{
            window.removeEventListener("resize", handleReSize)
        }
    },[isOpen])

    return (
        <div className={!isOpen || windowSize <= 1059 ? "profile__side": "profile__side-head"}>
            <div className="profile__side-content">
                <Img src={sideLogo} alt="logo" />
                <div className="company__name">
                    <p className="-name-text">companyName</p>
                </div>
                <SideTabs />
                <div className="profile__side-help">
                    <span>
                        <Img src={help} alt="help" />
                    </span>
                    <p className="help__text">
                        need help
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSide