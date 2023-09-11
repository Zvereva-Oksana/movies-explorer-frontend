import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  onAddCardMovie,
  cardsForRender,
  isLoading,
  countCardsPerPage,
  setCountCardsPerPage,
  onDeleteCard,
  errorLoading,
  countCardsWithAdditionalLoading,
  moviesForLocalStorage,
}) {
  const [cardsForRenderOnPage, setCardsForRenderOnPage] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setCardsForRenderOnPage(cardsForRender);
    } else {
      const cards = cardsForRender.slice(0, countCardsPerPage);
      setCardsForRenderOnPage(cards);
    }
  }, [cardsForRender, countCardsPerPage]);
  return (
    <section className="cards-list">
      {isLoading && cardsForRender.length === 0 && <Preloader />}
      {errorLoading?.length > 0 && !isLoading && <p>{errorLoading}</p>}
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isLoading && cardsForRender.length === 0
        ? (localStorage.getItem('movies') === null ? '' : <p className="cards-list__text">Ничего не найдено</p>)
        : (
          <div className="cards-list__wrapper" aria-label="Коллекция карточек с фильмами">
            {cardsForRenderOnPage.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                onAddCardMovie={onAddCardMovie}
                onDeleteCard={onDeleteCard}
                moviesForLocalStorage={moviesForLocalStorage}
              />
            ))}
          </div>
        )}
      {cardsForRender.length > cardsForRenderOnPage.length
            && (
            <button
              onClick={() => {
                setCountCardsPerPage(countCardsPerPage + countCardsWithAdditionalLoading);
              }}
              type="button"
              className="cards-list__button"
            >
              Ещё
            </button>
            )}
    </section>
  );
}

export default MoviesCardList;
