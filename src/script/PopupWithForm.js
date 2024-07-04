import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".form__input")
    );
    this._getInputValues = this._getInputValues.bind(this);
  }
  _getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });

    return this.formValues;
  }
  open() {
    super.open();
  }
  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues());
    });
  }
}