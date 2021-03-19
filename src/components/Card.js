// import { useEffect, useState } from "react";
// import api from "../utils/Api";
import React from "react";

function Card(props) {
//   const [cards, setCards] = useState([]);
//   useEffect(() => {
//     api.getAllCards().then((dataCard) => {
//       console.log(dataCard);
//       setCards(dataCard);
//     });
//   }, []); 
// console.log(cards);
function handleClick() {
  props.gethandleClick({src:props.src, name:props.name})
  // props.gethandleClick(props.src);
}  
  return (
    <div className="element">
      <img className={`element__image ${props.card && "popup_active"}`}
      src={`${props.src}`} alt="Картинка" onClick={handleClick}/>
      <p className="element__paragraph">{props.name}</p>
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
        <p className="element__like-number">{props.likes.length}</p>
      </div>
    </div>
  );
}

export default Card;
