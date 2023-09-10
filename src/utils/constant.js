const regexName = /^[A-Za-zА-Яа-яЁё /s -]+$/;
const regexEmail = /\w+@\w+\.\w+/;
const errorMovieLoading = 'Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const errorSearchMovie = 'Нужно ввести ключевое слово';

export {
  regexEmail, regexName, errorMovieLoading, errorSearchMovie,
};
