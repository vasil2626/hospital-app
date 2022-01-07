import Img from "next/image";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import order from "../../../Assets/profile/tabs/orders.png"
import Table from "../table/Table";

const ProfileOrder = () => {

    const [startData, setStartData] = useState(new Date())

    return (
        <div className="profile__order">
            <div className="profile__order-content">
                <h3 className="payment__order-head">
                    <Img src={order} alt="img" />
                   <span className="--head-text">Order</span> 
                </h3>
                <div className="profile__order-search">
                    <div className="profile__order-form">
                        <span className="label">
                           <p>Search</p> 
                            <input type="text" name="search" className="--search" />
                        </span>
                        <span className="label">
                        <p>Status</p> 
                            
                            <select name="select" id="" className="--select">
                            </select>
                        </span>
                        <span className="label">
                        <p>From</p> 
                            
                            <ReactDatePicker 
                            selected={startData} 
                            startDate={startData}
                            onChange={(date) => setStartData(date)}
                            />
                        </span>
                        <span className="label">
                        <p>to</p> 
                            <ReactDatePicker
                             selected={startData} 
                             startDate={startData}
                             onChange={(date) => setStartData(date)}
                             />
                        </span>
                    </div>
                    <button className="--form__button">new order</button>
                </div>
                <Table />
            </div>
        </div>
    );
}

export default ProfileOrder