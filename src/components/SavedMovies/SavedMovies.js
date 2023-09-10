import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { errorSearchMovie } from '../../utils/constant';

function SavedMovies({ myMovie, onDeleteCard }) {
  const [movieSearchInput, setMovieSearchInput] = useState('');
  const [errorSearch, setErrorSearch] = useState('');
  const [isClickSearchButton, setClickSearchButton] = useState(false);
  const [cardsForRender, setCardsForRender] = useState([]);
  const [isToggleToShortMyFisms, setIsToggleToShortMyFisms] = useState(false);
  const [moviesForLocalStorage, setMoviesForLocalStorage] = useState([]);

  const handleChangeMovieSearch = (event) => {
    setMovieSearchInput(event.target.value);
    if (event.target.value.trim().length > 0) {
      setErrorSearch('');
    }
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (!movieSearchInput) {
      return setErrorSearch(errorSearchMovie);
    }
    return setClickSearchButton(!isClickSearchButton);
  };

  useEffect(() => {
    if (myMovie.length > 0 && movieSearchInput.length === 0) {
      setCardsForRender(myMovie);
      const movieSearcShortFilm = myMovie.filter((card) => card.duration <= 40);
      isToggleToShortMyFisms ? setCardsForRender(movieSearcShortFilm)
        : setCardsForRender(myMovie);
    } else if (movieSearchInput && myMovie.length > 0) {
      const movieSearc = myMovie.filter((card) => card.nameRU.toLowerCase()
        .includes(movieSearchInput.toLowerCase())
          || card.nameEN.toLowerCase().includes(movieSearchInput.toLowerCase()));
      setCardsForRender(movieSearc);
      const movieSearcShortFilm = movieSearc.filter((card) => card.duration <= 40);
      isToggleToShortMyFisms ? setCardsForRender(movieSearcShortFilm)
        : setCardsForRender(movieSearc);
    } else if (myMovie.length === 0) {
      setCardsForRender(myMovie);
    }
  }, [isClickSearchButton, isToggleToShortMyFisms, myMovie]);

  useEffect(() => {
    let movies = [];
    try {
      movies = JSON.parse(localStorage.getItem('movies')) || [];
    } catch (err) {
      () => {};
    }
    setMoviesForLocalStorage(movies);
  }, []);

  return (
    <>
      <SearchForm
        movieSearchInput={movieSearchInput}
        onSubmit={handleSubmitSearch}
        errorSearch={errorSearch}
        onChange={handleChangeMovieSearch}
        setToggle={setIsToggleToShortMyFisms}
        toggle={isToggleToShortMyFisms}
      />
      <MoviesCardList
        cardsForRender={cardsForRender}
        onDeleteCard={onDeleteCard}
        moviesForLocalStorage={moviesForLocalStorage}
      />
    </>
  );
}

export default SavedMovies;
