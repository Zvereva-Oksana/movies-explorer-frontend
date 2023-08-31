import React, {useEffect, useState} from 'react';
import movies from "./../../utils/mock-films"
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'
import UseWindowWidth from "../../utils/useWindowWidth";
import {useLocation} from "react-router-dom";

const MoviesCardList = ({onMovieClick}) => {
    const {width} = UseWindowWidth();
    const [countCardsPerPage, setCountCardsPerPage] = useState(null);
    const [cardsForRender, setCardsForRender] = useState([]);
    const [numberPage, setNumberPage] = useState(1);
    let location = useLocation();

    useEffect(() => {
        if (width >= 1270) {
            setCountCardsPerPage(12)
        } else if (width >= 768 && width < 1270) {
            setCountCardsPerPage(8)
        } else {
            setCountCardsPerPage(5)
        }
    }, [width])

    useEffect(() => {
        const cardsForRenderOnPage = movies.slice(0, numberPage * countCardsPerPage);
        setCardsForRender(cardsForRenderOnPage);
    }, [numberPage, countCardsPerPage])

    return (
        <section className="cards-list">
            <div className="cards-list__wrapper" aria-label="Коллекция карточек с фильмами">
                {location.pathname === '/movies' && cardsForRender.map((movie) => (
                    <MoviesCard
                        key={movie['_id']}
                        movie={movie}
                        onMovieClick={onMovieClick}
                    />
                ))}
                {location.pathname === '/saved-movies' && cardsForRender.map((movie) => (
                    <MoviesCard
                        key={movie['_id']}
                        movie={movie}
                        onMovieClick={onMovieClick}
                    />
                ))}
            </div>
            {cardsForRender.length !== movies.length &&
            <button onClick={() => setNumberPage(numberPage + 1)} type="button"
                    className="cards-list__button">Ещё</button>}
        </section>
    );
}

export default MoviesCardList;