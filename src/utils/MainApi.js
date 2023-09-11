class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then(({ message }) => {
      const error = new Error(message);
      error.status = res.status;
      throw error;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getErrorMessageFromResponseBody(string) {
    let errorString = string;

    try {
      const json = JSON.parse(string);
      if (json.errors) {
        errorString = json.errors[0].msg;
      }
    } catch (err) {
      () => {};
    }
    return errorString;
  }

  _request(Url, options) {
    return fetch(Url, options)
      .then(this._checkRes);
  }

  setToken(jwt) {
    // eslint-disable-next-line no-underscore-dangle
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${jwt}`,
    };
  }

  getContent(jwt) {
    const Url = `${this._baseUrl}/users/me`;
    return this._request(Url, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${jwt}`,
      },
    });
  }

  updateUserInfo(infoData) {
    const Url = `${this._baseUrl}/users/me`;
    return this._request(Url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(infoData),
    });
  }

  getSaveMovies() {
    const Url = `${this._baseUrl}/movies`;
    return this._request(Url, {
      headers: this._headers,
    });
  }

  addNewMovie(movieData) {
    const Url = `${this._baseUrl}/movies`;
    return this._request(Url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movieData),
    });
  }

  deleteMovie(_id) {
    const Url = `${this._baseUrl}/movies/${_id}`;
    return this._request(Url, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  register({ name, email, password }) {
    const Url = `${this._baseUrl}/signup`;
    return this._request(Url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(
        {
          name,
          email,
          password,
        },
      ),
    });
  }

  authorize({ email, password }) {
    const Url = `${this._baseUrl}/signin`;
    return this._request(Url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.movies.zvereva.nomoredomainsicu.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
