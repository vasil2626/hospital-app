import Img from "next/image";
import ReactDatePicker from "react-datepicker";
import order from "../../../Assets/profile/tabs/orders.png"

const ProfileOrder = () => {
    return (
        <div className="profile__order">
            <div className="profile__order-content">
                <Img src={order} alt="img" />
                <div className="profile__order-search">
                    <div className="profile__order-form">
                        <span className="label">
                            Search
                            <input type="text" name="search" className="--search" />
                        </span>
                        <span className="label">
                            Status
                            <select name="select" id="" className="--select">
                            </select>
                        </span>
                        <span className="label">
                            From
                            <ReactDatePicker />
                        </span>
                        <span className="label">
                            to
                            <ReactDatePicker />
                        </span>
                        <div className="--form__button">new order</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfileOrder