import React from 'react';
import FormRegisterAndLogin from "../FormRegisterAndLogin/FormRegisterAndLogin";

const Register = ({autoComplete, errorRegister}) => {

    return (
        <FormRegisterAndLogin
            header='Добро пожаловать!'
            nameForm='register'
            autoComplete='off'
            nameButton='Зарегистрироваться'
            registrationQuestion='Уже зарегистрированы?'
            route='/signin'
            linkName='Войти'
            error={errorRegister}
        >
            <div className="form__block-wrapper">
                <label className="form__label" htmlFor="username">Имя</label>
                <div className='form__input-wrapper'>
                    <input
                        className='form__input'
                        id="username"
                        name="username"
                        type="text"
                        autoComplete={autoComplete}
                        required/>
                </div>
            </div>
        </FormRegisterAndLogin>
    )
}

export default Register;
