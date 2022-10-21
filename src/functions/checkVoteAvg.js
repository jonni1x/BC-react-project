import React from 'react'

const checkVoteAvg = (voteAvg) => {
        if(voteAvg > 8.5) {
          return <span className='green'>{voteAvg}</span>
        } else if(voteAvg > 7.4) {
          return <span className='orange'>{voteAvg}</span>
        } else {
          return <span className='red'>{voteAvg}</span>
        }
}

export default checkVoteAvg