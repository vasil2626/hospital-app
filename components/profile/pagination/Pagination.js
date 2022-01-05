
const Pagination = ({ perPage, totalPage, pagination }) => {


    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
        pageNumber.push(i)
    }


    return (
        <div className="pagination">
            {
                pageNumber.map((page, i) => {
                    return (
                        <button
                            key={i}
                            className="pagination__button"
                            onClick={() => pagination(page)}
                            disabled={totalPage <= pageNumber.length}
                        >
                            {page}
                        </button>
                    );
                })
            }

        </div>
    );
}

export default Pagination