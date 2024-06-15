export class FormValidator {
  constructor(form, firstInput, secondInput, firstSpan, secondSpan, button) {
  this._form = form;
  this._firstInput = firstInput;
  this._firstSpan = firstSpan;
  this._secondInput = secondInput;
  this._secondSpan = secondSpan;
  this._button = button;
}

setEventListeners(){
this._form.addEventListener("submit", (evt) => {
evt.preventDefault();
});
this._firstInput.addEventListener("input", () => {
  if (!this._firstInput.validity.valid || !this._secondInput.validity.valid)
{
      this._firstSpan.classList.add("form__input-error-active");
      this._firstSpan.textContent = this._firstInput.validationMessage;
      this._button.classList.add("form__button-inactive");
      this._button.disabled =true;
  } else {
      this._firstSpan.classList.remove("form__input-error-active");
      this._firstSpan.textContent = " ";
      this._button.classList.remove("form__button-inactive");
      this._button.disabled =false;
      }
  });

  this._secondInput.addEventListener("input", () => {
  if (!this._secondInput.validity.valid || !this._firstInput.validity.valid )
  {
      this._secondSpan.classList.add("form__input-error-active");
      this._secondSpan.textContent = this._secondInput.validationMessage;
      this._button.classList.add("form__button-inactive");
      this._button.disabled =true;
  } else {
      this._secondSpan.classList.remove("form__input-error-active");
      this._secondSpan.textContent = " ";
      this._button.classList.remove("form__button-inactive");
      this._button.disabled =false;
      }
  });
  }
};