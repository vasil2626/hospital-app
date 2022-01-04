import Img from "next/image";
import { data, marks } from "./data"
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import chart from "../../../Assets/user-info/chart.png"
import Pagination from "../pagination/Pagination";

const UserInfo = () => {

    const [startDate, setStartDate] = useState(new Date())

    const [page, setPage] = useState({
        currentPage: 1,
        perPage: 16
    })

    const lastIndex = page.currentPage * page.perPage

    const firstIndex = lastIndex - page.perPage

    const current = marks.slice(firstIndex, lastIndex + page.currentPage)


    const pagination = (pageNumber) =>{
        setPage({
            ...page,
            currentPage: pageNumber
        })
    }

    return (
        <div className="user__info">
            <section className="user__info-content">
                {
                    data.map((user) => {
                        return (
                            <div className="user__info-user" key={user.id}>
                                <Img src={user.img} alt="user" />
                                <ul className="user__state">
                                    {
                                        user.state.map((state, i) => {
                                            return (
                                                <li className="user__items" key={i}>
                                                    <span className="--item__key">{Object.keys(state).toString().split("_").join(" ")}</span>
                                                    <span className="--item__value">{Object.values(state)}</span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
                <div className="user__button-container">
                    <button className="user__info-button">Update avatar</button>
                    <button className="user__info-button">Update avatar</button>
                    <button className="user__info-button">Update avatar</button>
                </div>
            </section>
            <div className="user__info-due-date">
                <div className="--due__date-content">
                    <span className="date__content-label">Due Date</span>
                    <ReactDatePicker
                        selected={startDate}
                        startDate={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <div className="--date__content-chart">
                        <Img src={chart} />
                    </div>
                </div>
            </div>

            <section className="user__info-marks">
                <ul className="marks__list">
                    {
                        current.map((marks) => {
                            return (
                                <li className="marks__list-items" key={marks.id}>
                                    <span className="marks__label">
                                        {marks.label}
                                        <p className="marks__description">{marks.description}</p>
                                    </span>
                                    <span className="marks__status">{marks.mark__status}</span>
                                </li>
                            );
                        })
                    }
                    <div className="marks__lists-status"><span className="status__light" /> Marks all as ready </div>
                </ul>
            </section>
            <section className="pagination">
                <Pagination 
                currentPage={page.currentPage}
                posts={current.length}
                pagination={pagination}
                />
            </section>
        </div>
    );
}


export default UserInfo