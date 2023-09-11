import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ setToggle, toggle }) {
  return (
    <div className="filter-checkbox">
      <div>
        <input
          type="checkbox"
          checked={toggle}
          onChange={() => setToggle((state) => !state)}
          id="switch"
          className="filter-checkbox__input"
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="switch"
          className="filter-checkbox__slider"
        />
      </div>
      <p className="filter-checkbox__choice">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
