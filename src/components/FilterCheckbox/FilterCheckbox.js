import React from 'react';
import "./FilterCheckbox.css"

const FilterCheckbox = () => {
    return (
        <div className="filter-checkbox">
            <div>
                <input type="checkbox"
                       id="switch"
                       className="filter-checkbox__input"/>
                <label htmlFor="switch"
                       className="filter-checkbox__slider"/>
            </div>
            <p className="filter-checkbox__choice">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;