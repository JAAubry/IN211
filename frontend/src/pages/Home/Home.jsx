import logo from './logo.svg';
import './Home.css';
import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';




const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesLoadingError, setMoviesLoadingError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=522d421671cf75c2cba341597d86403a`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        setMoviesLoadingError('An error occured while fetching movies.');
        console.error(error);
      });
  }, []);

  return { movies, moviesLoadingError };
}




function Home() {
  const [movieName, setMovieName] = useState(" ")
  const { movies, moviesLoadingError } = useFetchMovies();
  const listItems = movies.map((movie) =>
    <li key={movie.id}>{movie.title}</li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vos films préférés
        </p>

        <label>
          <input value={movieName} onChange={e => setMovieName(e.target.value)} ></input>
        </label>
        <p>
          {movieName}
        </p>

        <ul>{listItems}</ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
