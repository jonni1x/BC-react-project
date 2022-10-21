import React from 'react';
import Movie from '../components/Movie';
import Fetch from '../functions/Fetch';
import PaginationFn from '../functions/PaginationFn';
import Pagination from '../components/Pagination';

const PopularMovies = ({addToWatchLater}) => {
  const { page, paginationNums, handleClick, prevPage, nextPage } = PaginationFn();

  //Fetch Data
  const popularMoviesApi = `https://api.themoviedb.org/3/movie/popular?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US&page=${page}`;
  const {data, isLoading, error } = Fetch(popularMoviesApi);

  
  return (
    <div className='popular-movies'>
        <h2>Popular Movies</h2>

        <div className='movies'>
          {
            data &&
            data.map(movie => {
              const {poster_path : image,
                     original_title: title,
                     vote_average,
                     id } = movie

              return <Movie
                    key={id} 
                    id={id} 
                    image={image} 
                    vote_average={vote_average} 
                    title={title} 
                    addToWatchLater={addToWatchLater}/> 
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

export default PopularMovies