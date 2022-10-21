import React from 'react'

const Pagination = ({prevPage, paginationNums, handleClick, nextPage }) => {
  return (
    <div className='pagination'>
        <button onClick={prevPage}> {'<'} </button>
        {
            paginationNums.map((num, i) => {
            return (
                <span onClick={handleClick} key={i}>{num}</span>
                )
            })
            }
        <button onClick={nextPage}> {'>'} </button>
    </div>
  )
}

export default Pagination