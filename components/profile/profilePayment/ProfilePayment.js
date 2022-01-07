import Img from "next/image";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import paymentImage from "../../../Assets/profile/tabs/payment.png"
import Table from "../table/Table";

const ProfilePayment = () => {

    const [startDate, setStartDate] = useState(new Date)

    return (
        <div className="payment">
            <div className="payment__content">
                <h3 className="payment__head">
                    <Img src={paymentImage} alt="img" /> 
                    <span className="--head-text">payment</span> 
                </h3>
                <div className="payment__search">
                    <div className="payment__search-form">
                        <span className="label">
                            <p>from</p>
                            <ReactDatePicker
                             selected={startDate}
                             startDate={startDate}
                             onChange={(date) => setStartDate(date)}
                             />
                        </span>
                        <span className="label">
                            <p>to</p>
                            <ReactDatePicker
                             selected={startDate}
                             startDate={startDate}
                             onChange={(date) => setStartDate(date)}
                             />
                        </span>
                    </div>
                </div>
                <Table />
            </div>
        </div>
    );
}

export default ProfilePayment