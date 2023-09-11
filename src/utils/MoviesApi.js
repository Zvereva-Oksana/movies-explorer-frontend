const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const getAllExistMovies = () => fetch(BASE_URL, {
  method: 'Get',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`))));

export default getAllExistMovies;
