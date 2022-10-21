import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import checkVoteAvg from '../functions/checkVoteAvg';

const Movie = ({id, image, vote_average, title, addToWatchLater}) => {
const img_url = 'https://image.tmdb.org/t/p/w500/';

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

                addToWatchLater(movie) 
                }}/>
            </div>
        </div>
  )
}

export default Movie