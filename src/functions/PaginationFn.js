import React, { useState } from 'react'

const PaginationFn = () => {
    const [page, setPage  ] = useState(1);
    const [paginationNums] = useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14
    ]);

    const handleClick = (e) => {
        const num = e.target.innerText;
        setPage(parseInt(num));
    }

    const prevPage = () => {
        if(page > 1) {
            setPage(parseInt(page - 1))
        } else return;
    }

    const nextPage = () => {
        if(page < 14) {
            setPage(parseInt(page + 1));
          } else return;
    }

    return { page, paginationNums, handleClick, prevPage, nextPage };
}

export default PaginationFn