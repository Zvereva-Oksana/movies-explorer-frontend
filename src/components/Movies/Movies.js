import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { errorMovieLoading, errorSearchMovie } from '../../utils/constant';
import UseWindowWidth from '../../utils/useWindowWidth';
import getAllExistMovies from '../../utils/MoviesApi';

function Movies({
  myMovie, onAddCardMovie, onDeleteCard,
  cardsForRender, setCardsForRender,
  countCardsPerPage, setCountCardsPerPage,
  countCardsWithAdditionalLoading,
}) {
  const [movieSearchInput, setMovieSearchInput] = useState('');
  const [errorSearch, setErrorSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClickSearchButton, setClickSearchButton] = useState(false);
  const [isToggleToShortFisms, setIsToggleToShortFisms] = useState(false);
  const { width } = UseWindowWidth();
  const [errorLoading, setErrorLoading] = useState('');
  const [moviesForLocalStorage, setMoviesForLocalStorage] = useState([]);
  const [movies, setMovies] = useState([]);

  const filterFilms = () => {
    const movieSearc = movies.filter((card) => card.nameRU.toLowerCase()
      .includes(movieSearchInput.toLowerCase())
            || card.nameEN.toLowerCase().includes(movieSearchInput.toLowerCase()));
    if (isToggleToShortFisms) {
      const movieSearcShortFilm = movieSearc.filter((card) => card.duration <= 40);
      setCardsForRender(movieSearcShortFilm);
    } else {
      setCardsForRender(movieSearc);
      setMoviesForLocalStorage(movieSearc);
      localStorage.setItem('movies', JSON.stringify(movieSearc));
    }
    localStorage.setItem('movieSearchInput', JSON.stringify(movieSearchInput));
    localStorage.setItem('toggleToShortFisms', JSON.stringify(isToggleToShortFisms));
  };

  useEffect(() => {
    if (movieSearchInput && movies.length === 0) {
      setIsLoading(true);
      getAllExistMovies().then(
        (dataMovies) => {
          const myMoviesId = myMovie.map(({ movieId }) => movieId);
          dataMovies.forEach((elem) => {
            if (myMoviesId.includes(elem.id)) {
              elem.isSave = true;
              elem._id = myMovie.filter(({ movieId }) => movieId === elem.id)[0]._id;
            } else {
              elem.isSave = false;
            }
          });
          setMovies(dataMovies);
        },
      ).catch(() => {
        setErrorLoading(errorMovieLoading);
      }).finally(() => {
        setIsLoading(false);
        setClickSearchButton(!isClickSearchButton);
      });
    }
    if (movieSearchInput && movies.length > 0) {
      filterFilms();
    }
  }, [isClickSearchButton]);

  useEffect(() => {
    if (movieSearchInput && movies.length === 0) {
      if (isToggleToShortFisms) {
        const movieSearcShortFilm = moviesForLocalStorage.filter((card) => card.duration <= 40);
        setCardsForRender(movieSearcShortFilm);
      } else {
        setCardsForRender(moviesForLocalStorage);
      }
      localStorage.setItem('toggleToShortFisms', JSON.stringify(isToggleToShortFisms));
    } else if (movieSearchInput && movies.length > 0) {
      filterFilms();
    }
  }, [isToggleToShortFisms]);

  useEffect(() => {
    let movies = null;
    let movieSearchInput = null;
    let toggleToShortFisms = null;
    try {
      movies = JSON.parse(localStorage.getItem('movies')) || [];
      movieSearchInput = JSON.parse(localStorage.getItem('movieSearchInput')) || '';
      toggleToShortFisms = JSON.parse(localStorage.getItem('toggleToShortFisms')) || false;
    } catch (err) {
      () => {};
    }
    if (movies && movieSearchInput && !toggleToShortFisms) {
      setMoviesForLocalStorage(movies);
      setCardsForRender(movies);
    } else if (movies && movieSearchInput && toggleToShortFisms) {
      const movieSearcShortFilm = movies.filter((card) => card.duration <= 40);
      setMoviesForLocalStorage(movies);
      setCardsForRender(movieSearcShortFilm);
    }
    setMovieSearchInput(movieSearchInput);
    toggleToShortFisms && setIsToggleToShortFisms(toggleToShortFisms);
  }, []);

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
    setClickSearchButton(!isClickSearchButton);
    if (width >= 1270) {
      return setCountCardsPerPage(12);
    } else if (width >= 768 && width < 1270) {
      return setCountCardsPerPage(8);
    } else {
      return setCountCardsPerPage(5);
    }
  };
  return (
    <>
      <SearchForm
        movieSearchInput={movieSearchInput}
        onSubmit={handleSubmitSearch}
        errorSearch={errorSearch}
        onChange={handleChangeMovieSearch}
        setToggle={setIsToggleToShortFisms}
        toggle={isToggleToShortFisms}
      />
      <MoviesCardList
        onAddCardMovie={onAddCardMovie}
        cardsForRender={cardsForRender}
        isLoading={isLoading}
        countCardsPerPage={countCardsPerPage}
        setCountCardsPerPage={setCountCardsPerPage}
        onDeleteCard={onDeleteCard}
        errorLoading={errorLoading}
        countCardsWithAdditionalLoading={countCardsWithAdditionalLoading}
        moviesForLocalStorage={moviesForLocalStorage}
      />
    </>
  );
}

export default Movies;
