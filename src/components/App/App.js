import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import dataUsers from "../../utils/mock-dataUser";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import {useLocation} from 'react-router-dom'
import UseWindowWidth from "../../utils/useWindowWidth";

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [errorProfile, setErrorProfile] = React.useState('')
    const [isMobile, setIsMobile] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState(null)
    const [errorLogin, setErrorLogin] = React.useState('')
    const [errorRegister, setErrorRegister] = React.useState('')
    let location = useLocation();
    const {width} = UseWindowWidth();
    const permittedRoutesHeader = ['/', '/movies', '/saved-movies', '/profile'];
    const permittedRoutesFooter = ['/', '/movies', '/saved-movies'];

    React.useEffect(() => {
        if (width <= 800) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width])

    const handleMovieChoiceOnSave = (movie) => {
        setSelectedMovie(movie)
    }

    return (
        <CurrentUserContext.Provider value={dataUsers}>
            <div className="app">
                {permittedRoutesHeader.includes(location.pathname) && <Header
                    isLoggedIn={isLoggedIn}
                    isMobile={isMobile}
                />}
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movies" element={<Movies
                        onMovieClick={handleMovieChoiceOnSave}
                    />}/>
                    <Route path="/saved-movies" element={<SavedMovies/>}/>
                    <Route path="/profile" element={<Profile
                        errorProfile={errorProfile}/>}/>
                    <Route path="/signup" element={<Register
                        errorRegister={errorRegister}
                    />}/>
                    <Route path="/signin" element={<Login
                        errorLogin={errorLogin}
                    />}/>
                    <Route path="*" element={<NotFoundPage to="/" replace={true}/>}/>
                </Routes>
                {permittedRoutesFooter.includes(location.pathname) && <Footer/>}
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
