import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";

const Register = () => {
  // const [formParams, setFormParams] = useState({
  //   username: '',
  //   password: '',
  // });
  // const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormParams((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formParams.username || !formParams.password){
  //     return;
  //   }
  //   props.handleLogin({ username: formParams.username, password: formParams.password })
  //     .catch(err => {
  //       setMessage(err.message);
  //     });
  // }

  return(
    <>
      <header className="header">
        <img
          src={logo}
          alt="логотип сайта"
          className="header__logo"/>
        <Link to="/signin" className="register__signin">Войти</Link>
      </header>
      <div className="register">
        <h2 className="register__title">
          Регистрация
        </h2>
        <form className="register__form">
          <input
            className="register__text"
            required
            name="username"
            type="text"
            placeholder="Email"
          />
          <input
            className="register__text"
            required
            name="password"
            type="password"
            placeholder="Пароль"
          />
          <div className="register__button-container">
            <button type="submit" className="register__link">Зарегистрироваться</button>
            <Link to="/signin" className="register__signin">Уже зарегистрированы? Войти</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;