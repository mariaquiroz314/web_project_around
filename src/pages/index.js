import "../pages/index.css";
import logoSrc from "../images/logo.png";
import Card from "../script/Card.js";
import FormValidator from "../script/FormValidator.js";
import Section from "../script/Section.js"
import PopupWithForm from "../script/PopupWithForm.js";
import UserInfo from "../script/UserInfo.js";
import {
  initialCards,
  elementContainder,
  formList,
  profileButton,
  profileAddButton,
  settings,
  formInputName,
  formInputAboutme,
} from "../script/utils.js";
import PopupWithImage from "../script/PopupWithImage.js";
const logoImage = document.getElementById("header-logo");
logoImage.src = logoSrc;
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const popupImage = new PopupWithImage("#popup-imagen");
      const card = new Card(item.name, item.link, popupImage.handleCardClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
      popupImage.setEventListeners();
    },
  },
  elementContainder
);
cardList.renderItems();

function validationForm() {
  formList.forEach((formElement) => {
    const formsValidator = new FormValidator(formElement, settings);
    formsValidator.enableValidation();
  });
}
function resetValidationForm() {
  formList.forEach((formElement) => {
    const formsValidator = new FormValidator(formElement, settings);
    formsValidator.resetValidation();
  });
}
function toggleButtonForm() {
  formList.forEach((formElement) => {
    const toggleButton = new FormValidator(formElement, settings);
    toggleButton._toggleButtonState();
  });
}

const userInfo = new UserInfo({
  user: ".profile__name",
  job: ".profile__about-me",
});

const popupProfile1 = new PopupWithForm("#popup-profile", (inputs) => {
  userInfo.setUserInfo({ name: inputs.name, aboutme: inputs.aboutme });
  popupProfile1.close();
});

const popupAddImage1 = new PopupWithForm("#popup-addimage", (inputs) => {
  const addCardElement = new Card(inputs.place, inputs.url);
  const cardElement = addCardElement.generateCard();
  elementContainder.prepend(cardElement);
  popupAddImage1.close();
});

profileButton.addEventListener("click", () => {
  popupProfile1.open();
  validationForm();
  toggleButtonForm();
  const userInfo = new UserInfo({
    user: ".profile__name",
    job: ".profile__about-me",
  });

  const userValues = userInfo.getUserInfo();
  formInputName.value = userValues.name;
  formInputAboutme.value = userValues.aboutme;
  resetValidationForm();
});
profileAddButton.addEventListener("click", () => {
  popupAddImage1.open();
  validationForm();
  toggleButtonForm();
  resetValidationForm();
});

popupProfile1.setEventListeners();
popupAddImage1.setEventListener