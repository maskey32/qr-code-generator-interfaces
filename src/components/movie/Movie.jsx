import React, { useState, useEffect } from 'react';
import { MovieStyles } from './MovieStyles';
import queryString from 'query-string';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const search = queryString.parse(window.location.search);
    const moviesArray = JSON.parse(search.movies);
    
    setMovies(moviesArray);
  }, []);
  
  return (
    <MovieStyles>
      <h1 className="movie-page-title">Generated {movies.length} Movies</h1>
      <div className="movie-page-cards">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h2 className="movie-card-title">{movie.title}</h2>
            <img src={movie.image} alt={movie.title} className="movie-card-image" />
          </div>
        ))}
      </div>
    </MovieStyles>
  )
}

export default Movie;