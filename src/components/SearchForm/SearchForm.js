import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"

const SearchForm = () => {
    const [search, setSearch] = React.useState('');
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='search'>
            <form className='search__form'>
                <input type="text"
                       className="search__input"
                       id="search"
                       name="search"
                       placeholder="Фильм"
                       value={search}
                       onSubmit={handleSubmit}
                       onChange={handleChangeSearch}
                />
                <button type="submit" className="search__button"/>
            </form>
            <FilterCheckbox/>
        </div>
    );
}

export default SearchForm;