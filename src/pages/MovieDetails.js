import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const img_url = 'https://image.tmdb.org/t/p/w500/';
    const relatedMoviesAPI = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US&page=1`
    const detailsAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US`
    const [movie, setMovie] = useState({});
    const [relatedMovies, setRelatedMovies] = useState([]);

    useEffect(() => {
        fetch(detailsAPI)
            .then(res => res.json())
            .then(data => {
              setMovie(data)
            })
            .catch(e => {
                console.log(e.message)
            }) 
    }, []);

    useEffect(() => {
      fetch(relatedMoviesAPI)
        .then(res => res.json())
        .then(data => setRelatedMovies(data.results.slice(0, 3)))
    }, [])

  return (
    <div className='movie-details'>
        { 
        <>
          <div>
            <h2>{movie.title}</h2>
            <img src={img_url+movie.backdrop_path} alt={movie.title} />
            <p>{movie.overview}</p>
            <span>Vote Average: {movie.vote_average}</span>
          </div>
          <h2 style={{'textAlign': 'center'}}>Related Movies</h2>
          <div className='related-movies'>
            {relatedMovies.map(movie => {
               const {poster_path : image,
                original_title: title,
                id } = movie

                return (
                  <div className='movie' key={id}>
                      <Link to={`/movie${id}`}>
                        <img src={img_url+image} alt={id} />
                      </Link>
                        <h4>{title}</h4>
                  </div>
              )  
              })
            }
          </div>
        </>
        }
    </div>
  )
}

export default MovieDetails