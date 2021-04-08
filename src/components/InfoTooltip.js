import React from "react";
function InfoTooltip(props){
    return (
        <div
        className="popup"
      >
        <div className={`popup__container popup-${props.name}__container`}>
          <button
            className="popup__close-button"
            aria-label="Закрыть попап"
            type="button"
            onClick={props.onClose}
          ></button>
          <img className="info-tooltip__logo" src={props.logo} alt="Удачно" />
          <p className="info-tooltip__paragraph ">Вы успешно зарегистрировались!{props.title}</p>

        </div>
      </div>
    )
}

export default InfoTooltip