import logo from './logo.svg';
import './Home.css';
import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';

// function useFetchMovies() {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0`)
//       .then((response) => {
//         setMovies(response.data.results);
//       })
//       .catch((error) => {
//         // Do something if call failed
//         console.log(error);
//       })

//     return;
//   }, []);
//   console.log("useFetchMovies", movies)

//   return { movies };
// }



function Home() {
  console.log("Début Home")
  const [movieName, setMovieName] = useState(" ")

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
