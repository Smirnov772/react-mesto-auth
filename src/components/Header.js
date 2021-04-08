import React from "react";
import logo from "../images/logo.svg";
// import { Link, useHistory } from "react-router-dom";
function Header() {
  // const history = useHistory();
  // function signOut() {
  //   localStorage.removeItem("jwt");
  //   history.push("/sign-up");
  // }
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
      {/* <ul className="header__nav">
        <li>
          <Link to="ducks" className="header__link"></Link>
        </li>
        <li>
          <button onClick={signOut} className="header__link header__button">
            Выйти
          </button>
        </li>
      </ul> */}
    </header>
  );
}

export default Header;
