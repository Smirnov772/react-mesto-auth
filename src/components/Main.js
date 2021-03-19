// import React, { useEffect } from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "../components/Card";

function Main(props) {
  const [userInfo, setUserInfo] = useState({
    name: "Жак Ив Кусто",
    about: "Иследователь океана",
  });
  useEffect(() => {
    api
      .getUserInfo()
      .then((dataUser) => {
        console.log(dataUser);
        setUserInfo(dataUser);
      })
      .catch((err) => console.log(err));
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getAllCards().then((dataCard) => {

      setCards(dataCard);
    });
  }, []);
  console.log(cards)
const handleCardClick=(url)=>{
  props.onCardClick(url)

}

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userInfo.avatar})` }}
        >
          <button
            className="profile__avatar-pencil"
            onClick={props.onEditAvatar}
            type="button"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userInfo.name}</h1>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfile}
            type="button"
          ></button>
          <p className="profile__occupation">{userInfo.about}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>

      <section className="elements">
        {cards.map((item) => 
          <Card 
          name={item.name}
          likes={item.likes}
          key={item._id}
          src={item.link} 
          gethandleClick={handleCardClick}/>
        )}
      </section>
    </main>
  );
}

export default Main;
