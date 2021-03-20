import React from "react";

function Card(props) {
  function handleClick() {
    props.handleClick({ src: props.src, name: props.name });
  }
  return (
    <div className="element">
      <img
        className={`element__image ${props.card && "popup_active"}`}
        src={`${props.src}`}
        alt="Картинка"
        onClick={handleClick}
      />
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
