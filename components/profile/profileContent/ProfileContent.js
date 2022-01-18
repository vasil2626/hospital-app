import { useSelector } from "react-redux";
import ProfileOrder from "../profileOrder/ProfileOrder";
import ProfilePayment from "../profilePayment/ProfilePayment";
import UserInfo from "../userInfo/UserInfo";

const ProfileContent = () => {

    const {toggle} = useSelector(state => state.toggleReducer)


    return (
        <>
            {
                toggle === "profile" ?
                    <UserInfo /> :
                    toggle === 'orders' ?
                        <ProfileOrder/>:
                        toggle === 'payment' &&
                        <ProfilePayment/>
            }
        </>
    );
}

export default ProfileContent