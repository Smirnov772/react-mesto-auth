import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Логотип Место" />
    </header>
  );
}

export default Header;
