import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import { data, body } from "./data"
import actionImage from "../../../Assets/user-info/action.svg"
import Img from "next/image";
import TableAction from "./tableAction/TableAction";

const Table = () => {

    const [pages, setPages] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const [perPage] = useState(3)

    const [idCol, setIdCol] = useState(null)


    useEffect(() => {
        setPages(body)

    }, [currentPage, perPage])


    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    const current = pages.slice(firstIndex, lastIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const btnColumn = (elem) => {
        if (elem.id == idCol) setIdCol(null)
        else setIdCol(elem.id)
    }

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="tr1">
                        {
                            data.map((head, i) => {
                                return (
                                    <th key={i} >
                                        {head}
                                    </th>
                                );
                            })
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        current.map((body, i) => {
                            return (
                                <tr key={i} className="tr">
                                    <td className="td">{body.id}</td>
                                    <td >{body.name}</td>
                                    <td >{body.status}</td>
                                    <td >{body.clinic}</td>
                                    <td >{body.requestor}</td>
                                    <td >{body.request_subject}</td>
                                    <td >{body.attachment_count}</td>
                                    <td >{body.payed}</td>
                                    <td className="action__icon" onClick={() => btnColumn(body)}><Img src={actionImage} alt="img" />
                                        {
                                            body.id === idCol &&
                                            <TableAction />
                                        }
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="table__pagination">

                <Pagination
                    perPage={perPage}
                    totalPage={pages.length}
                    pagination={paginate}
                />
            </div>

        </div>

    );
};

export default Table
