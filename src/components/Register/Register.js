import React, { useEffect } from 'react';
import FormRegisterAndLogin from '../FormRegisterAndLogin/FormRegisterAndLogin';
import useFormWithValidation from '../../utils/validation';
import api from '../../utils/MainApi';

function Register({
  errorRegister, setErrorRegister, onLogin, tokenCheck, navigate,
}) {
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      navigate('/');
    }
  }, []);

  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  useEffect(() => {
    if (errorRegister.length > 0) {
      setErrorRegister('');
    }
  }, [values]);

  const handleSubmitRegisterForm = async (event) => {
    event.preventDefault();
    try {
      const { name, email } = await api.register(values);
      if (name && email) {
        resetForm();
        api.authorize({ email, password: values.password }).then(({ jwt }) => {
          if (!jwt) {
            return;
          }
          onLogin();
          localStorage.setItem('jwt', jwt);
          navigate('/movies');
          tokenCheck();
        });
      }
    } catch (err) {
      setErrorRegister(err.message);
    }
  };

  useEffect(() => {
    if (errorRegister.length > 0) {
      setErrorRegister('');
    }
  }, [values]);

  return (
    <FormRegisterAndLogin
      header="Добро пожаловать!"
      nameForm="register"
      autoComplete="off"
      nameButton="Зарегистрироваться"
      registrationQuestion="Уже зарегистрированы?"
      route="/signin"
      linkName="Войти"
      errorAfterSendingRequest={errorRegister}
      errorsValidationPassword={errors.password}
      errorsValidationEmail={errors.email}
      onChange={handleChange}
      valueEmail={values.email || ''}
      valuePassword={values.password || ''}
      onSubmitForm={handleSubmitRegisterForm}
      isValid={isValid}
    >
      <div className="form__block-wrapper">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="form__label" htmlFor="name">Имя</label>
        <div className="form__input-wrapper">
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            value={values.name || ''}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="profile__wrapper-error profile__wrapper-error_left">
          <span className="profile__error-text">{errors.name}</span>
        </div>
      </div>
    </FormRegisterAndLogin>
  );
}

export default Register;
