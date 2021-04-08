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
       <form onSubmit={props.onSubmit}>{props.children}</form> 
      </div>
    </div>
  );
}

export default PopupWithForm;

// Было бы круто еще реализовать остаточный функционал для всех попапов. 
// Это сделать довольно просто: нужно создать базовый компонент Popup, 
// который содержит в себе логику открытия/закрытия (по esc, по клик на оверлею, etc). 
// Внутри него находится лишь главный div, который содержит в себе базовые классы для отображения элемента как попап, 
// а также само свойство children - чтобы мы могли создать композицию компонентов.
// Например, для компонента PopupWithForm это будет выглядеть как-то так:
// <Popup isOpen={isOpen} onClose={onClose}>
//   <form ..>
//     // внутренности PopupWithForm
//   </form>
// </Popup> 