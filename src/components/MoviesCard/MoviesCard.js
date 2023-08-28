import React from "react";
import './MoviesCard.css'
import {useLocation} from "react-router-dom";
import UseWindowWidth from "../../utils/useWindowWidth";

const MoviesCard = ({movie}) => {
    const [isMovieChoice, setMovieChoice] = React.useState(false)
    const [isHover, setIsHover] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false);
    const {width} = UseWindowWidth();
    let location = useLocation();
    const getTimeFromMins = (min) => {
        let hours = Math.trunc(min / 60);
        let minutes = min % 60;
        return `${hours}ч ${minutes}м`;
    }

    const handleMovieClick = () => {
        setMovieChoice(true)
    }

    React.useEffect(() => {
        if (width <= 400) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width])

    return (
        <div id={movie._id} className={`movie ${
            location.pathname === '/saved-movies' && !isMobile ? `movie_hover` : ``}`}
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}>
            <img className="movie__thumbnail" src={movie.thumbnail} alt={movie.nameRU}/>
            <div className="movie__wrapper">
                <h2 className="movie__name">{movie.nameRU}</h2>
                {location.pathname === "/movies" &&
                <button type="submit"
                        className={`movie__button ${
                            isMovieChoice ? `movie__button_active` : ``}`}
                        onClick={handleMovieClick}/>}
                {location.pathname === "/saved-movies" && isHover && !isMobile &&
                <button type="submit"
                        className="movie__button-delete"
                />}
                {location.pathname === "/saved-movies" && isMobile &&
                <button type="submit"
                        className="movie__button-delete"
                />}
            </div>
            <span className="movie__duration">{getTimeFromMins(movie.duration)}</span>
        </div>
    );
}

export default MoviesCard;