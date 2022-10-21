import React from 'react'
import Movie from '../components/Movie';
import Pagination from '../components/Pagination';
import Fetch from '../functions/Fetch';
import PaginationFn from '../functions/PaginationFn';

const TopratedMovies = ({addToWatchLater}) => {
  const { page, paginationNums, handleClick, prevPage, nextPage } = PaginationFn();

  //Fetch
  const topRatedMoviesApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US&page=${page}`;
  const {data : topRatedMovies, isLoading, error } = Fetch(topRatedMoviesApi);

  
  return (
    <div className='top-rated-movies'>
        <h2>Top Rated Movies</h2>

        <div className='movies'>
          {
            topRatedMovies &&
            topRatedMovies.map(movie => {
              const {poster_path : image,
                     original_title: title,
                     vote_average,
                     id } = movie

              return <Movie 
                      key={id} 
                      id={id} 
                      image={image} 
                      title={title} 
                      vote_average={vote_average} 
                      addToWatchLater={addToWatchLater}
                      /> 
            })
          }
        </div>

        <Pagination
          page={page}
          paginationNums={paginationNums}
          handleClick={handleClick} 
          prevPage={prevPage} 
          nextPage={nextPage} 
          />
          
          {
            isLoading && <div>Loading...</div>
          }
          {
            error && <div>{error}</div>
          }
    </div>
  )
}

export default TopratedMovies