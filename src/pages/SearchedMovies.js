import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SearchedMovies = ({movies, addToWatchLater, value}) => {
    const img_url = 'https://image.tmdb.org/t/p/w500/';

   const checkVoteAvg = (voteAvg) => {
        if(voteAvg > 8.5) {
          return <span className='green'>{voteAvg}</span>
        } else if(voteAvg > 7.4) {
          return <span className='orange'>{voteAvg}</span>
        } else {
          return <span className='red'>{voteAvg}</span>
        }
      }

  return (
    <div className='search-movies'>
      <h2>SEARCH RESULTS FOR: {value}</h2>
        <div className='movies'>
          {
            movies &&
            movies.map(movie => {
              const {poster_path : image,
                     original_title: title,
                     vote_average,
                     id } = movie

              return (
                <div className='movie' key={id}>
                    <Link to={`/movie${id}`}>
                      {image ? <img src={img_url+image} alt={id
                      
                      
                      
                      } /> : <img src='https://apply.sts.net.pk/assets/images/default-upload-image.jpg' alt='' />}
                    </Link>
                    
                      <h4>{title}</h4>
                      <div>
                        {checkVoteAvg(vote_average)}
                        <Icon icon='akar-icons:star' className='icon' onClick={(e) => {
                          const element = e.target;
                          const movie = element.parentElement;
                          element.classList.toggle('yellowBg');
                          
                          if(element.classList.contains('yellowBg') && movie.classList.contains('movie')) {
                            addToWatchLater(movie)
                          }
                          
                        }}/>
                      </div>
                </div>
            )  
            })
          }
        </div>
    </div>
  )
}

export default SearchedMovies