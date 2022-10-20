import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const TopratedMovies = ({addToWatchLater}) => {
  const img_url = 'https://image.tmdb.org/t/p/w500/';
  const [page, setPage  ] = useState(1);
  const [paginationNums] = useState([
    1,2,3,4,5,6,7,8,9,10,11,12,13,14
  ]);
  const topRatedMoviesApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US&page=${page}`;
  

  const handleClick = (e) => {
    const num = e.target.innerText;
    setPage(num)
  }

  const checkVoteAvg = (voteAvg) => {
    if(voteAvg > 8.5) {
      return <span className='green'>{voteAvg}</span>
    } else if(voteAvg > 7.4) {
      return <span className='orange'>{voteAvg}</span>
    } else {
      return <span className='red'>{voteAvg}</span>
    }
  }

  const [ topRatedMovies, settopRatedMovies] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError] = useState('')

  useEffect(() => {
    fetch(topRatedMoviesApi)
      .then(res => res.json())
      .then(data => {
        settopRatedMovies(data.results);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message)
        setIsLoading(false);
      })
  }, [page])
  
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

              return (
                <div className='movie' key={id}>
                    <Link to={`/movie${id}`}>
                      <img src={img_url+image} alt={id} />
                    </Link>
                    
                      <h4>{title}</h4>
                      <div>
                        {checkVoteAvg(vote_average)}
                        <Icon icon='akar-icons:star' className='icon' onClick={(e) => {
                          const element = e.target;
                          const movie = element.parentElement.parentElement;
                          element.classList.toggle('yellowBg');
                          
                          if(element.classList.contains('yellowBg')) {
                            addToWatchLater(movie)
                          }
                          
                        }}/>
                      </div>
                      
                </div>
            )  
            })
          }
        </div>

          <div className='pagination'>
            <button onClick={() => {
              if(page > 1) {
                setPage(page - 1);
              } else return;
    
            }}> {'<'} </button>
              {
                paginationNums.map((num, i) => {
                  return (
                    <span onClick={handleClick} key={i}>{num}</span>
                  )
                })
              }
            <button onClick={() => {
              if(page < 14) {
                setPage(page + 1);
              } else return;
            }}> {'>'} </button>
          </div>


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