import React from 'react'
import { Link } from 'react-router-dom';


const WatchLater = ({array}) => {
  console.log(array)
  return (
    <div className='watch-later'>
      {
        array.length &&
        array.map(movie => {
          const image = movie.querySelector('a img').src;
          const title = movie.querySelector('h4').textContent;
          const id = movie.querySelector('a img').alt;
          return (
            <div className='movie' key={id}>
              <Link to={`/movie${id}`}>
                <img src={image} alt={title} />
              </Link>
                  
                <h4>{title}</h4>
            </div>
             )
      })}
    </div>
  )
}

export default WatchLater