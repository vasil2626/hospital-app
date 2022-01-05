import ProfileContent from "../../components/profile/profileContent/ProfileContent";

const User = () => {


    return (
        <div className="profile__content">
            <ProfileContent/>
        </div>
    );
}

export default User

User.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    );
}