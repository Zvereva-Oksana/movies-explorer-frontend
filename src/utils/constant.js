const REGEX_NAME = /^[A-Za-zА-Яа-яЁё /s -]+$/;
const REGEX_EMAIL = /\w+@\w+\.\w+/;
const ERROR_MOVIES_LOADING = 'Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const ERROR_SEARCH_MOVIE = 'Нужно ввести ключевое слово';
const DURATION_OF_SHORT_FILMS = 40;
const COUNT_CARDS_ON_PAGE = {
  DESKTOP: 12,
  TABLET: 8,
  MOBILE: 5,
};
const COUNT_ADDITIONAL_CARDS = {
  DESKTOP: 3,
  TABLET: 2,
  MOBILE: 2,
};

export {
  REGEX_EMAIL, REGEX_NAME,
  ERROR_MOVIES_LOADING, ERROR_SEARCH_MOVIE,
  DURATION_OF_SHORT_FILMS, COUNT_CARDS_ON_PAGE,
  COUNT_ADDITIONAL_CARDS,
};
