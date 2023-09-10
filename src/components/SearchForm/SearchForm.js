import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  movieSearchInput,
  onSubmit,
  errorSearch,
  onChange,
  setToggle,
  toggle,
}) {
  return (
    <div className="search">
      <div className="search__wrapper">
        <form className="search__form">
          <input
            type="text"
            className="search__input"
            id="search"
            name="search"
            placeholder="Фильм"
            value={movieSearchInput}
            onChange={onChange}
            required
          />
          <button type="submit" onClick={onSubmit} className="search__button" />
        </form>
        {errorSearch && <span className="search__error-text">{errorSearch}</span>}
      </div>
      <FilterCheckbox
        setToggle={setToggle}
        toggle={toggle}
      />
    </div>
  );
}

export default SearchForm;
