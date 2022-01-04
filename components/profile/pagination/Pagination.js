import { useState } from "react";

const Pagination = ({currentPage, posts, pagination}) =>{

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(posts - i); i++){
        console.log(i);
        pageNumber.push(i)
    }

    return(
        <div className="pagination">
            
            {
                pageNumber.map((page, i) =>{
                    return(
                        <button 
                        key={i}
                        className="pagination__button"
                        onClick={() => pagination(page)}
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