import { useDispatch } from "react-redux";
import ProfileContent from "../../components/profile/profileContent/ProfileContent";
// import { getData } from "../../redux/actions/getData/getDataAction";
// import { wrapper } from "../../redux/store";
import {useEffect} from "react"



const User = ({data}) => {

    // const dispatch = useDispatch()


    // useEffect(() =>{
    //     // dispatch(getData(data))
    // })

    return (
        <div className="profile__content">
            <ProfileContent/>
        </div>
    );
}


// export async function getServerSideProps() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await res.json()
//     return { props: { data } }
//   }




export default User


User.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    );
}


