import ProfileHead from "./profile/profileHead/ProfileHead"
import ProfileSide from "./profile/profileSide/ProfileSide"

const ProfileLayout = ({ children }) => {
    return (
        <div className="admin__layout">
            <ProfileHead />
            {children}
            <ProfileSide />
        </div>
    )
}

export default ProfileLayout