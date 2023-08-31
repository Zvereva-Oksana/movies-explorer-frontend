import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"

const SearchForm = ({movieSearch, onSubmit, errorSearch, onChange}) => {
    return (
        <div className='search'>
            <div className="search__wrapper">
                <form className='search__form'>
                    <input type="text"
                           className="search__input"
                           id="search"
                           name="search"
                           placeholder="Фильм"
                           value={movieSearch}
                           onChange={onChange}
                           required
                    />
                    <button type="submit" onClick={onSubmit} className="search__button"/>
                </form>
                {errorSearch && <span className="search__error-text">{errorSearch}</span>}
            </div>
            <FilterCheckbox/>
        </div>
    )
}

export default SearchForm;