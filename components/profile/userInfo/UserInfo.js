import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Img from "next/image";
import { datas, marks } from "./data"
import ReactDatePicker from "react-datepicker";
import Chart from "../chart/Chart";
import Pagination from "../pagination/Pagination";
// import { getData } from "../../../redux/actions/getData/getDataAction";


const UserInfo = () => {



    const [startDate, setStartDate] = useState(new Date())

    const [pages, setPages] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const [perPage] = useState(3)

    // const {data} = useSelector(state => state.getDataReducer)



    useEffect(() => {
        setPages(marks)

    }, [currentPage, perPage])

    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    const current = pages.slice(firstIndex, lastIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    return (
        <div className="user__info">
            <div className="user__info-section" >
                <div className="user__info-content">
                    {
                        datas.map((user) => {
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

                </div>
                <div className="user__info-due-date">
                    <div className="--due__date-content">
                        <span className="date__content-label">Due Date</span>
                        <ReactDatePicker
                            selected={startDate}
                            startDate={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="due__date-date"
                        />
                        <div className="--date__content-chart">
                            <Chart />
                        </div>
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
            <section className="marks__pagination">
                <Pagination
                    perPage={perPage}
                    totalPage={pages.length}
                    pagination={paginate}
                />
            </section>
     
        </div>
    );
}




export default UserInfo
