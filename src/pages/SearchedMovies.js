import React from 'react'
import Movie from '../components/Movie';

const SearchedMovies = ({movies, addToWatchLater, value}) => {


  return (
    <div className='search-movies'>
      <h2>SEARCH RESULTS FOR: {value}</h2>
        <div className='movies'>
          {
            movies ?
            movies.map(movie => {
              const {poster_path : image,
                     original_title: title,
                     vote_average,
                     id } = movie

              return <Movie key={id} id={id} image={image} title={title} vote_average={vote_average} addToWatchLater={addToWatchLater}/> 
            }) : <div>No data</div>
          }
        </div>
    </div>
  )
}

export default SearchedMovies