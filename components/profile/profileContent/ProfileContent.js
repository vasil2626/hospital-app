import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileOrder from "../profileOrder/ProfileOrder";
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
                        <h1>payment</h1>
            }
        </>
    );
}

export default ProfileContent