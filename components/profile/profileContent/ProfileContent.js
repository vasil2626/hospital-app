import { useSelector } from "react-redux";
import ProfileOrder from "../profileOrder/ProfileOrder";
import ProfilePayment from "../profilePayment/ProfilePayment";
import UserInfo from "../userInfo/UserInfo";

const ProfileContent = () => {

    const state = useSelector(state => state.toggleReducer.toggle)

    return (
        <>
            {
                state === "profile" ?
                    <UserInfo /> :
                    state === 'orders' ?
                        <ProfileOrder/>:
                        state === 'payment' &&
                        <ProfilePayment/>
            }
        </>
    );
}

export default ProfileContent