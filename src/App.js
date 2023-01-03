import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home.component';
import Navigation from './components/navigation.component';
import Slideshow from './components/movie-list-slider.component';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchField, setsearchField] = useState('');
  const [genreMovie, setgenreMovie] = useState([]);
  //console.log(example)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=7eee92fd5276c7ce6beb8c9fc38a7b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratee')
      .then(response => response.json())
      .then(movies => { setMovies(movies.results) });
  }, [])
  //console.log(movies)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7eee92fd5276c7ce6beb8c9fc38a7b78&language=en-US')
      .then(response => response.json())
      .then(genresMovies => { setgenreMovie(genresMovies.genres) });
  }, [])
  //console.log(genreMovie)

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMovies(newFilteredMovies)
  }, [movies, searchField]);
  console.log(filteredMovies)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString)
  }

  return (
    <div className="App">
      <Navigation onChangeHandler={onSearchChange} />
      <Slideshow movies={movies}  />
      <Home movies={filteredMovies} genreMovie={genreMovie} />
    </div>
  );
}

export default App;


// logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original']
// poster_sizes:['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']


