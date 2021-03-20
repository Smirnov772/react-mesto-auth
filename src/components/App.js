import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

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
    console.log(url);
  }
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
    setSelectedCard(false);
  }

  return (
    <div>
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
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <div
          name="userAvatar"
          id="userAvatar"
          className="popup__forms"
          noValidate
        >
          <input
            required
            id="urlAvatar"
            type="url"
            name="link"
            placeholder="Ссылка на аватар"
            className="popup__form-input"
          />
          <span id="avatar-error" className=""></span>
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
        </div>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="user"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <div name="userForm" id="userForm" className="popup__forms" noValidate>
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            id="userName"
            name="name"
            placeholder="Жак-Ив Кусто"
            className="popup__form-input popup__form-input_name"
          />
          <span id="userName-error" className=""></span>
          <input
            required
            minLength="2"
            maxLength="200"
            type="text"
            id="userJob"
            name="about"
            placeholder="Исследователь океана"
            className="popup__form-input popup__form-input_occupation"
          />
          <span id="userJob-error" className=""></span>
          <button className="popup__save-button" type="submit">
            Сохранить
          </button>
        </div>
      </PopupWithForm>
      <PopupWithForm
        title="Добавить место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <div
          name="addCard"
          id="addCard"
          className="popup-add-card__forms popup__forms"
          noValidate
        >
          <input
            required
            minLength="1"
            maxLength="40"
            id="cardName"
            type="text"
            name="name"
            placeholder="Имя нового места"
            className="popup__form-input"
          />
          <span id="cardName-error" className=""></span>
          <input
            required
            id="cardLink"
            type="url"
            name="link"
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
        </div>
      </PopupWithForm>
    </div>
  );
}

export default App;
