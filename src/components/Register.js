import React from "react";


function Register (){
    return (
        <>
          <div className="user-auth">
            <p className="user-auth__paragraph">Регистрация</p>
            <form className="user-auth__form">
              <input className="user-auth__input" placeholder={"Email"}></input>
              <input className="user-auth__input" placeholder={"Пароль"}></input>
            </form>
            <button
              className="user-auth__button"
              aria-label="Войти"
              type="button"
            >Зарегистрироваться</button>
          </div>
        </>
      );
}







export default Register