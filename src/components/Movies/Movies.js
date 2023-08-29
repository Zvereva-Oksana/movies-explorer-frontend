import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({onMovieClick}) => {
    const [movieSearch, setMovieSearch] = React.useState('')
    const [errorSearch, setErrorSearch] = React.useState('')
    const [movie, setMovie] = React.useState('')

    const handleChangeMovieSearch = (event) => {
        setMovieSearch(event.target.value);
        if (event.target.value.trim().length > 0) {
            setErrorSearch('')
        }
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault();
        if (!movieSearch) {
            setErrorSearch('Нужно ввести ключевое слово')
        }
        return setMovie(movieSearch)
    };

    return (
        <>
            <SearchForm
                movieSearch={movieSearch}
                setMovieSearch={setMovieSearch}
                setErrorSearch={setErrorSearch}
                onSubmit={handleSubmitSearch}
                errorSearch={errorSearch}
                onChange={handleChangeMovieSearch}
            />
            <MoviesCardList
                onMovieClick={onMovieClick}
                movie={movie}
            />
        </>
    );
}

export default Movies;