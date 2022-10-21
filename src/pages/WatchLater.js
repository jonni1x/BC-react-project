import React from 'react'
import Movie from '../components/Movie';

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
          return <Movie key={id} id={id} title={title} image={image}/>
      })}
    </div>
  )
}

export default WatchLater