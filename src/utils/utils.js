export const converterMovieForSave = (obj, owner) => ({
  ...obj,
  image: `https://api.nomoreparties.co${obj.image.url}`,
  thumbnail: `https://api.nomoreparties.co${obj.image.formats.thumbnail.url}`,
  owner,
  movieId: obj.id,
});

export const normalizeCardAfterSave = (arr, obj) => {
  const index = arr.findIndex((elem) => elem.id === obj.id);
  arr[index] = { ...arr[index], isSave: true, _id: obj._id };
  return [...arr];
};

export const normalizeCardAfterDelete = (arr, obj) => {
  const index = arr.findIndex((elem) => elem.id === obj.id);
  // eslint-disable-next-line no-param-reassign
  arr[index] = { ...arr[index], isSave: false };
  return [...arr];
};

export const deleteCardFromSave = (arr, obj) => [...arr.filter(({ id }) => id !== obj.id)];

export const adaptForRenderMyMovies = (arr) => arr.map((elem) => ({ ...elem, id: elem.movieId }));
