import React, {useState} from "react";


const Pagination = ({classNameBtn, currentPage, setCurrentPage, maxPages}) => {
        let [isDisable, setIsDisable] = useState(false)


    if (currentPage <= 1) {
        isDisable = true
    }

    const nextPage = () => {
        setCurrentPage(currentPage+1)


    }
    const prevPage = () => {
        setCurrentPage(currentPage-1)
    }


    return (
        <div className="pagination">
            <button className={classNameBtn} disabled={isDisable} onClick={prevPage}>Prev</button>
            <button className={classNameBtn} disabled={currentPage === maxPages} onClick={nextPage}>Next</button>
        </div>
    )
}

export default Pagination;