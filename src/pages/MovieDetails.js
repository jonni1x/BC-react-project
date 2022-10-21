import React from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import Fetch from '../functions/Fetch';
import FetchDetails from '../functions/FetchDetails';

const MovieDetails = ({addToWatchLater}) => {
    const { id } = useParams();

    //Fetch Data
    const detailsAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US`;
    const {data, isLoading, error } = FetchDetails(detailsAPI);

    const relatedMoviesAPI = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US&page=1`;
    const {data: relatedMovies} = Fetch(relatedMoviesAPI);

  return (
    <div className='movie-details'>

        {isLoading && <div>Loading ...</div>}
        {error && <div>{error}</div>}

        { 
        <>
          <Movie key={data.id} id={data.id} image={data.backdrop_path} vote_average={data.vote_average} title={data.title} addToWatchLater={addToWatchLater}/>

          <div className='related-movies'>
            {relatedMovies.slice(0, 3).map(movie => {
               const {poster_path : image,
                original_title: title,
                id } = movie

                return <Movie
                        key={id} 
                        id={id} 
                        image={image} 
                        vote_average={movie.vote_average} 
                        title={title} 
                        addToWatchLater={addToWatchLater}/> 
              })
            }
          </div>
        </>
        }
    </div>
  )
}

export default MovieDetails