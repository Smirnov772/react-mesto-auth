import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
// import Card from "../components/Card";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(url) {

    setSelectedCard(url);
    console.log(url)  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
  }

  return (
    <body className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />

        <Footer />
      </div>
      <ImagePopup card={selectedCard}  onClose={closeAllPopups}/>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <form
          name="userAvatar"
          id="userAvatar"
          className="popup__forms"
          novalidate
        >
          <input
            required
            id="urlAvatar"
            type="url"
            name="link"
            value=""
            placeholder="Ссылка на аватар"
            className="popup__form-input"
          />
          <span id="avatar-error" className=""></span>
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="user"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <form name="userForm" id="userForm" className="popup__forms" novalidate>
          <input
            required
            minlength="2"
            maxlength="40"
            type="text"
            id="userName"
            name="name"
            value=""
            placeholder="Жак-Ив Кусто"
            className="popup__form-input popup__form-input_name"
          />
          <span id="userName-error" className=""></span>
          <input
            required
            minlength="2"
            maxlength="200"
            type="text"
            id="userJob"
            name="about"
            value=""
            placeholder="Исследователь океана"
            className="popup__form-input popup__form-input_occupation"
          />
          <span id="userJob-error" className=""></span>
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>
      <PopupWithForm
        title="Добавить место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <form
          name="addCard"
          id="addCard"
          className="popup-add-card__forms popup__forms"
          novalidate
        >
          <input
            required
            minlength="1"
            maxlength="40"
            id="cardName"
            type="text"
            name="name"
            value=""
            placeholder="Имя нового места"
            className="popup__form-input"
          />
          <span id="cardName-error" className=""></span>
          <input
            required
            id="cardLink"
            type="url"
            name="link"
            value=""
            placeholder="Ссылка на изображение"
            className="popup__form-input"
          />
          <span id="cardLink-error" className=""></span>
          <button
            className="popup-add-card__save-button popup__save-button"
            type="submit"
          >
            Создать
          </button>
        </form>
      </PopupWithForm>
      {/* <ImagePopup/> */}
      {/* <div className="popup popup-user">
        <div className="popup__container popup-user__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <p className="popup__paragraph">Редактировать профиль</p>
          <form
            name="userForm"
            id="userForm"
            className="popup__forms"
            novalidate
          >
            <input
              required
              minlength="2"
              maxlength="40"
              type="text"
              id="userName"
              name="name"
              value=""
              placeholder="Жак-Ив Кусто"
              className="popup__form-input popup__form-input_name"
            />
            <span id="userName-error" className=""></span>
            <input
              required
              minlength="2"
              maxlength="200"
              type="text"
              id="userJob"
              name="about"
              value=""
              placeholder="Исследователь океана"
              className="popup__form-input popup__form-input_occupation"
            />
            <span id="userJob-error" className=""></span>
            <button className="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup-add-card">
        <div className="popup-add-card__container popup__container">
          <button
            className="popup-add-card__close-button popup__close-button"
            aria-label="Закрыть карточку"
            type="button"
          ></button>
          <p className="popup-add-card__paragraph popup__paragraph">
            Добавить место
          </p>
          <form
            name="addCard"
            id="addCard"
            className="popup-add-card__forms popup__forms"
            novalidate
          >
            <input
              required
              minlength="1"
              maxlength="40"
              id="cardName"
              type="text"
              name="name"
              value=""
              placeholder="Имя нового места"
              className="popup__form-input"
            />
            <span id="cardName-error" className=""></span>
            <input
              required
              id="cardLink"
              type="url"
              name="link"
              value=""
              placeholder="Ссылка на изображение"
              className="popup__form-input"
            />
            <span id="cardLink-error" className=""></span>
            <button
              className="popup-add-card__save-button popup__save-button"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="big-image popup">
        <div className="big-image__content">
          <img className="big-image__item" src="#" alt="#" />
          <p className="big-image__name"></p>
          <button
            className="big-image__close popup__close-button"
            aria-label="Закрыть картинку"
            type="button"
          ></button>
        </div>
      </div>
      <div className="popup popup-avatar">
        <div className="popup__container popup-avatar__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <p className="popup__paragraph">Обновить аватар</p>
          <form
            name="userAvatar"
            id="userAvatar"
            className="popup__forms"
            novalidate
          >
            <input
              required
              id="urlAvatar"
              type="url"
              name="link"
              value=""
              placeholder="Ссылка на аватар"
              className="popup__form-input"
            />
            <span id="avatar-error" className=""></span>
            <button className="popup__save-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup-remove">
        <div className="popup__container popup-remove__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <p className="popup__paragraph">Вы уверены?</p>
          <button
            className="popup__save-button popup__remove-button"
            type="button"
          >
            Да
          </button>
        </div>
      </div>
      <template className="cards-template">
        <div className="element">
          <img className="element__image" alt="Картинка" />
          <p className="element__paragraph"></p>
          <button
            className="element__remove"
            aria-label="Удалить карточку"
            type="button"
          ></button>
          <div className="element__like-conteiner">
            <button
              className="element__like element__like_disable"
              type="button"
            ></button>
            <p className="element__like-number">0</p>
          </div>
        </div>
      </template> */}
    </body>
  );
}

export default App;
