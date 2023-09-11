import React, { useEffect, useState } from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import UseWindowWidth from '../../utils/useWindowWidth';

import {
  adaptForRenderMyMovies,
  converterMovieForSave,
  deleteCardFromSave,
  normalizeCardAfterDelete,
  normalizeCardAfterSave,
} from '../../utils/utils';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorProfile, setErrorProfile] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorRegister, setErrorRegister] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [myMovie, setMyMovie] = useState([]);
  const location = useLocation();
  const { width } = UseWindowWidth();
  const permittedRoutesHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const permittedRoutesFooter = ['/', '/movies', '/saved-movies'];
  const navigate = useNavigate();
  const [cardsForRender, setCardsForRender] = useState([]);
  const [countCardsPerPage, setCountCardsPerPage] = useState(null);
  const [countCardsWithAdditionalLoading, setCountCardsWithAdditionalLoading] = useState(null);
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requestMessageSuccessful, setRequestMessageSuccessful] = useState('');

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.setToken(jwt);
      setIsLoggedIn(true);
      setLoading(false);
      Promise.all([api.getContent(jwt), api.getSaveMovies()]).then(([dataUser, dataCardMovie]) => {
        if (!dataUser) {
          return;
        }
        setCurrentUser(dataUser);
        setMyMovie(adaptForRenderMyMovies(dataCardMovie));
      }).catch((err) => {
        setIsLoggedIn(false);
        setErrorLogin(err.message);
      });
    } else {
      navigate('/');
    }
  };

  useEffect(() => () => {
    clearTimeout(timer);
  }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleUpdateUser = (dataUser) => {
    api.updateUserInfo(dataUser).then((newDataUser) => {
      setCurrentUser(newDataUser);
      setRequestMessageSuccessful('Вы успешно обновили данные');
      setTimer(setTimeout(() => setRequestMessageSuccessful(''), 2000));
    }).catch((err) => {
      setErrorProfile(err.message);
    });
  };

  useEffect(() => {
    if (width <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    let countCardsPerPage;
    let countCardsWithAdditionalLoading;
    if (width >= 1270) {
      countCardsPerPage = 12;
      countCardsWithAdditionalLoading = 3;
    } else if (width >= 768 && width < 1270) {
      countCardsPerPage = 8;
      countCardsWithAdditionalLoading = 2;
    } else {
      countCardsPerPage = 5;
      countCardsWithAdditionalLoading = 2;
    }
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(setTimeout(() => {
      setCountCardsPerPage(countCardsPerPage);
      setCountCardsWithAdditionalLoading(countCardsWithAdditionalLoading);
    }, 500));
  }, [width]);

  const handleAddCardMovie = (movie, moviesForLocalStorage) => {
    const request = api.addNewMovie(converterMovieForSave(movie, currentUser.id));
    request.then((newCard) => {
      setMyMovie([{ ...newCard, id: newCard.movieId }, ...myMovie]);
      const cards = normalizeCardAfterSave(cardsForRender, { ...newCard, id: newCard.movieId });
      const cardsForSave = normalizeCardAfterSave(
        moviesForLocalStorage,
        { ...newCard, id: newCard.movieId },
      );
      setCardsForRender(cards);
      localStorage.setItem('movies', JSON.stringify(cardsForSave));
    }).catch(() => {
      () => {};
    });
  };

  const handleDeleteCard = (movie, moviesForLocalStorage) => {
    const request = api.deleteMovie(movie._id);
    request.then(() => {
      const cards = normalizeCardAfterDelete(cardsForRender, movie);
      const cardsForSave = normalizeCardAfterDelete(moviesForLocalStorage, movie);
      setCardsForRender(cards);
      setMyMovie(deleteCardFromSave(myMovie, movie));
      localStorage.setItem('movies', JSON.stringify(cardsForSave));
    }).catch(() => {
      () => {};
    });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setCardsForRender([]);
    setMyMovie([]);
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
  // eslint-disable-next-line react/jsx-pascal-case
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {permittedRoutesHeader.includes(location.pathname) && (
        <Header
          isLoggedIn={isLoggedIn}
          isMobile={isMobile}
        />
        )}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/movies"
            element={(
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                loading={loading}
                myMovie={myMovie}
                onAddCardMovie={handleAddCardMovie}
                onDeleteCard={handleDeleteCard}
                cardsForRender={cardsForRender}
                setCardsForRender={setCardsForRender}
                countCardsPerPage={countCardsPerPage}
                setCountCardsPerPage={setCountCardsPerPage}
                countCardsWithAdditionalLoading={countCardsWithAdditionalLoading}
              />
                      )}
          />
          <Route
            path="/saved-movies"
            element={(
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                loading={loading}
                myMovie={myMovie}
                onDeleteCard={handleDeleteCard}
              />
                      )}
          />
          <Route
            path="/profile"
            element={(
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                loading={loading}
                errorProfile={errorProfile}
                onUpdateUser={handleUpdateUser}
                currentUser={currentUser}
                onSignOut={handleSignOut}
                setErrorProfile={setErrorProfile}
                requestMessageSuccessful={requestMessageSuccessful}
              />
                      )}
          />
          <Route
            path="/signup"
            element={(
              <Register
                errorRegister={errorRegister}
                setErrorRegister={setErrorRegister}
                navigate={navigate}
                onLogin={() => setIsLoggedIn(true)}
                tokenCheck={tokenCheck}
              />
                      )}
          />
          <Route
            path="/signin"
            element={(
              <Login
                onLogin={() => setIsLoggedIn(true)}
                errorLogin={errorLogin}
                setErrorLogin={setErrorLogin}
                navigate={navigate}
                tokenCheck={tokenCheck}
              />
                      )}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {permittedRoutesFooter.includes(location.pathname) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
