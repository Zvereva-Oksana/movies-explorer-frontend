import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';
import UseWindowWidth from '../../utils/useWindowWidth';

function MoviesCard({
  movie, onAddCardMovie, onDeleteCard, moviesForLocalStorage,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = UseWindowWidth();
  const location = useLocation();

  const getTimeFromMins = (min) => {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  };

  const handleAddMovieClick = () => {
    onAddCardMovie(movie, moviesForLocalStorage);
  };

  const handleDeleteMovieClick = () => {
    onDeleteCard(movie, moviesForLocalStorage);
  };

  useEffect(() => {
    if (width <= 400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className={`movie ${
      location.pathname === '/saved-movies' && !isMobile ? 'movie_hover' : ''}`}
    >
      <Link to={movie.trailerLink} target="_blank">
        <img
          className="movie__thumbnail"
          src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image}
          alt={movie.nameRU}
        />
      </Link>
      <div className="movie__wrapper">
        <h2 className="movie__name">{movie.nameRU}</h2>
        {location.pathname === '/movies' && (
        <button
          type="submit"
          className={`movie__button ${
            movie.isSave ? 'movie__button_active' : ''}`}
          onClick={movie.isSave ? handleDeleteMovieClick : handleAddMovieClick}
        />
        )}
        {location.pathname === '/saved-movies' && (
          <button
            type="submit"
            className="movie__button-delete"
            onClick={handleDeleteMovieClick}
          />
        )}
      </div>
      <span className="movie__duration">{getTimeFromMins(movie.duration)}</span>
    </div>
  );
}

export default MoviesCard;
