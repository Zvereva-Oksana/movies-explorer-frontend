import React, { useEffect, useState } from 'react';
import './Profile.css';
import useFormWithValidation from '../../utils/validation';

function Profile({
  errorProfile, onUpdateUser, currentUser, onSignOut, setErrorProfile, requestMessageSuccessful,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();
  const [isValidInput, setIsValidInput] = useState(true);

  useEffect(() => {
    resetForm(currentUser);
  }, [currentUser, resetForm]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValidInput(false);
    } else (setIsValidInput(true));
  }, [values]);

  useEffect(() => {
    if (errorProfile.length > 0) {
      setErrorProfile('');
    }
  }, [values]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <h2 className="profile__header">
        Привет,
        {' '}
        {currentUser.name}
        !
      </h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__wrapper">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="nameUser" className="profile__name">Имя</label>
          <input
            className="profile-form__input"
            placeholder="новое имя"
            id="nameUser"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            value={values.name || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile__wrapper-error">
          <span className="profile__error-text">{errors.name}</span>
        </div>
        <div className="profile__wrapper profile__wrapper_last">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email" className="profile__name profile__name_last">E-mail</label>
          <input
            className="profile-form__input"
            placeholder="новый E-mail"
            id="email"
            name="email"
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="profile__wrapper-error">
          <span className="profile__error-text">{errors.email}</span>
        </div>
        <div className="profile__wrapper-navigation">
          {requestMessageSuccessful.length > 0 && <span className="profile__error-text">{requestMessageSuccessful}</span>}
          {errorProfile.length > 0 && <span className="profile__error-text">{errorProfile}</span>}
          <button
            type="submit"
            onSubmit={handleSubmit}
            disabled={!isValid || !isValidInput || errorProfile.length > 0}
            className="profile__button-edit"
          >
            Редактировать
          </button>
          <button type="button" onClick={onSignOut} className="profile__link-exit">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}
export default Profile;
