import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";

const Login = () => {
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
        <Link to="/register" className="login__signup">Регистрация</Link>
      </header>
      <div className="login">
        <h2 className="login__title">
          Вход
        </h2>
        <form className="login__form">
          <input
            className="login__text"
            required
            name="username"
            type="text"
            placeholder="Email"
          />
          <input
            className="login__text"
            required
            name="password"
            type="password"
            placeholder="Пароль"
          />
          <div className="login__button-container">
            <button type="submit" className="login__link">Войти</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

// const Login = (props) => {
//   const [formParams, setFormParams] = useState({
//     username: '',
//     password: '',
//   });
//   const [message, setMessage] = useState('');
//
//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormParams((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formParams.username || !formParams.password){
//       return;
//     }
//     props.handleLogin({ username: formParams.username, password: formParams.password })
//       .catch(err => {
//         setMessage(err.message);
//       });
//   }
//
//   return(
//     <div onSubmit={handleSubmit} className="login">
//       <Logo title={'CryptoDucks'}/>
//       <p className="login__welcome">
//         Это приложение содержит конфиденциальную информацию.
//         Пожалуйста, войдите или зарегистрируйтесь, чтобы получить доступ к CryptoDucks.
//       </p>
//       <p className="login__error">
//         {message}
//       </p>
//       <form className="login__form">
//         <label htmlFor="username">
//           Логин:
//         </label>
//         <input id="username" required name="username" type="text" value={formParams.username} onChange={handleChange} />
//         <label htmlFor="password">
//           Пароль:
//         </label>
//         <input id="password" required name="password" type="password" value={formParams.password} onChange={handleChange} />
//         <div className="login__button-container">
//           <button type="submit" className="login__link">Войти</button>
//         </div>
//       </form>
//
//       <div className="login__signup">
//         <p>Ещё не зарегистрированы?</p>
//         <Link to="/register" className="signup__link">Зарегистрироваться</Link>
//       </div>
//     </div>
//   );
// }
//
// export default Login;