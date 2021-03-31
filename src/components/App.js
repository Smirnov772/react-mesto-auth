import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";

import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { currentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Жак Ив Кусто",
    about: "Иследователь океана",
    avatar: "#",
  });
  useEffect(() => {
    api
      .getUserInfo()
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log(err));
  }, []);

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
    console.log(true);
  }
  function handleUpdateAvatar(avatarUrl) {
    console.log(avatarUrl);
    api
      .editAvatar(avatarUrl)
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log(err));
    closeAllPopups();
  }
  function handleUpdateUser(dataUser) {
    console.log(dataUser);
    api
      .renameUser(dataUser.name, dataUser.about)
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log(err));
    closeAllPopups();
  }

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getAllCards()
      .then((dataCard) => {
        setCards(dataCard);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlaceSubmit(dataNewCard) {
    console.log(dataNewCard);
    api
      .addCard(dataNewCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.log(err));
      closeAllPopups();
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards(cards.filter((i) => i._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      {" "}
      <div>
        <div className="page__content">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer />
        </div>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
