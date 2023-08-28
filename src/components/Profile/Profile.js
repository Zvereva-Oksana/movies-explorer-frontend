import React from "react";
import dataUsers from "../../utils/mock-dataUser";
import {Link} from "react-router-dom";
import "./Profile.css";

const Profile = ({errorProfile}) => {
    const [isEditProfile, setIsEditProfile] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(dataUsers.name || '');
        setEmail(dataUsers.email || '');
    }, [dataUsers]);

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    return (
        <section className="profile">
            <h2 className="profile__header">Привет, {dataUsers.name}!</h2>
            <form className="profile__form">
                <div className="profile__wrapper">
                    <p className="profile__name">Имя</p>
                    {isEditProfile
                        ?
                        <div>
                            <input
                                className='profile-form__input'
                                placeholder="новое имя"
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={handleChangeName}
                            />
                            <label className="cursor"/>
                        </div>
                        : <p className="profile__user">{dataUsers.name}</p>
                    }
                </div>
                <form className="profile__wrapper profile__wrapper_last">
                    <p className="profile__name profile__name_last">E-mail</p>
                    {isEditProfile
                        ? <input
                            className='profile-form__input'
                            placeholder="новый E-mail"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        : <p className="profile__user">{dataUsers.email}</p>
                    }
                </form>
            </form>
            {isEditProfile
                ? <div className="profile__wrapper-navigation">
                    {errorProfile && <span className="profile__error-text">{errorProfile}</span>}
                    {errorProfile
                        ? <button type="button" className="profile__button-save profile__button-save_disabled"
                                  disabled>Сохранить</button>
                        : <button type="submit" className="profile__button-save">Сохранить</button>
                    }
                </div>
                : <div className="profile__wrapper-navigation">
                    <button type="button" onClick={() => setIsEditProfile(true)}
                            className="profile__button-edit">Редактировать
                    </button>
                    <Link to="/signin" className="profile__link-exit">Выйти из аккаунта</Link>
                </div>}
        </section>
    )
}

export default Profile;