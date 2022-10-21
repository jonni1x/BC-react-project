import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PopularMovies from './pages/PopularMovies';
import TopratedMovies from './pages/TopratedMovies';
import WatchLater from './pages/WatchLater';
import { useState } from 'react';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import SearchedMovies from './pages/SearchedMovies';


function App() {
  const [watchLater, setWatchLater] = useState([]);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('')

  const addToWatchLater = (el) => {
    console.log(el)
    setWatchLater([...watchLater, el]);

    console.log(watchLater)
  }

  const searchMovies = (val) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=49a84267a7ee35126c537015b2e94e2b&language=en-US&page=1&include_adult=false&query=${val}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
      
      setValue(val)
  }

  return (
    <div className="App">
      <Header searchMovies={searchMovies} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/movies/popular' element={ <PopularMovies addToWatchLater={addToWatchLater}/> } />
        <Route path='/movies/top-rated' element={ <TopratedMovies addToWatchLater={addToWatchLater}/> } />
        <Route path='/watch-later' element={ <WatchLater array={watchLater}/> } />
        <Route path='/searched-movies' element={ < SearchedMovies movies={movies} addToWatchLater={addToWatchLater} value={value}/>} />
        <Route path='/movie:id' element={ <MovieDetails /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
