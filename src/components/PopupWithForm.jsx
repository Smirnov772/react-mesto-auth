import React from "react";
function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${props.isOpen && "popup_active"}`}
    >
      <div className={`popup__container popup-${props.name}__container`}>
        <button
          className="popup__close-button"
          aria-label="Закрыть попап"
          type="button"
          onClick={props.onClose}
        ></button>
        <p className="popup__paragraph">{props.title}</p>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWithForm;
