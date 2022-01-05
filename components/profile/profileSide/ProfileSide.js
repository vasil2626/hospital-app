import Img from "next/image";
import sideLogo from "../../../Assets/profile/side/side-logo.png"
import help from "../../../Assets/profile/side/help.png"
import SideTabs from "../sideTabs/sideTabs";

const ProfileSide = () => {
    return (
        <div className="profile__side">
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