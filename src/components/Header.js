import logo from "../images/logo.svg";
import { Route, Switch, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="логотип сайта"
        className="header__logo"/>
      <Switch>
        <Route path='/signin'>
          <Link to="/signup" className="header__link">Регистрация</Link>
        </Route>
        <Route path='/signup'>
          <Link to="/signin" className="header__link">Войти</Link>
        </Route>
        <Route path='/'>
          <Link to='/signin' onClick={props.handleSignOut} className="header__link">Выйти</Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;