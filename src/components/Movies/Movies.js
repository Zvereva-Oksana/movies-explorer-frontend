import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({onMovieClick}) => {
    return (
        <>
            <SearchForm/>
            <MoviesCardList
                onMovieClick={onMovieClick}
            />
        </>
    );
}

export default Movies;