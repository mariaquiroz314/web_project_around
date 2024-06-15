import class Card from "../Card.js";

import {
  initialCards,
  profileName,
  profileAboutElement,
  profileName,
  profileAbout
  profileEditButton,
  editPopupElement,
  formElement,
  nameInput,
  aboutInput,
  closeButtonPopup,
  profileAddButton,
  addImagePopupElement,
  titleInput,
  imageInput,
  templateCard,
  cardArea,
  groupImage,
  formCard,
  popupImageOpen,
  closeImage,
  popupImageTitle,
  popupImage,
  initialProfileName,
  initialProfileAbout,
  overlayEdit,
  overlayAdd
  overlayImage
} from "..utils.js";

const popupProfile = document.querySelector("#popup-profile");
const popupCards = document.querySelector("#popup-add-card");
const profileButton = document.querySelector(".#profile__button");
const openCardForm = document.querySelector("#.profile__add-button");
const profileName = document.querySelector("#.profile__name");
const profileAbout = document.querySelector("#.profile__paragraph");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");
const formCards = document.querySelector("#form-addcard");
const template = document.querySelector("#.template-card");
const cardArea = document.querySelector("#.elements");

initialCards.forEach(function (element) {
  const newCard = new Card(element.name, element.link).generateCard();
  cardArea.append(newCard);
});

function handleOpenProfile() {
  popupProfile.classList.add("popup_show");
}
function handleCloseProfile() {
  popupProfile.classList.remove("popup_show");
}
profileButton.addEventListener("click", handleOpenProfile);
openCardForm.addEventListener("click", function() {
  popupCards.classList.add("popup_show");
});


//Popup editar perfil
function setPopupInput() {
  nameInput.value = initialProfileName;
  aboutInput.value = initialProfileAbout;
}

function openPopup() {
  editPopupElement.classList.add("popup_opened");
  overlayEdit.addEventListener("click", handleOverlayClick);
}

function handlePopupClick(event) {
  setPopupInput();
  openPopup();
}

function closePopup() {
  editPopupElement.classList.remove("popup_opened");
  overlayEdit.removeEventListener("click", handleOverlayClick);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = aboutInput.value;
  initialProfileName = nameInput.value;
  initialProfileAbout = aboutInput.value;
  closePopup();
}

//Popup agregar imagenes
function openAddImagePopup() {
  addImagePopupElement.classList.add("popup_opened");
  overlayAdd.addEventListener("click", handleOverlayClick);
}

function handleAddImageClick(event) {
  openAddImagePopup();
}

function closeAddImagePopup() {
  addImagePopupElement.classList.remove("popup_opened");
  overlayAdd.removeEventListener("click", handleOverlayClick);
}

function handleAddImageFormSubmit(evt) {
  evt.preventDefault();
  const newImageTitle = titleInput.value;
  const newImageUrl = imageInput.value;
  closeAddImagePopup();
}

//Template cards
function cardGenerator(title, link) {
  const card = templateCard.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__photo");
  const cardTitle = card.querySelector(".card__info-name");
  const likeButton = card.querySelector(".card__like-button");
  const deleteButton = card.querySelector(".card__delete-button");
  cardImage.src = link;
  cardTitle.textContent = title;
  cardImage.alt = title;
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function () {
    handleOpenImage(title, link);
  });
  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  if (evt.submitter.classList.contains("popup__save-button")) {
    const newCard = cardGenerator(titleInput.value, imageInput.value);
    cardArea.prepend(newCard);
  }
  closeAddImagePopup();
}

//Popup imagenes
function handleCloseImage() {
  popupImageOpen.classList.remove("popup_opened");
  overlayImage.removeEventListener("click", handleOverlayClick);
}

function handleOpenImage(title, link) {
  popupImage.src = link;
  popupImageTitle.textContent = title;
  popupImageOpen.classList.add("popup_opened");
  closeImage.addEventListener("click", handleCloseImage);
  overlayImage.addEventListener("click", handleOverlayClick);
}

//Overlays
function handleOverlayClick(event) {
  if (event.target.classList.contains("popup__overlay")) {
    closePopup();
    closeAddImagePopup();
    handleCloseImage();
  }
}

function closeWithEsc(event) {
  if (event.key === "Escape") {
    closePopup();
    closeAddImagePopup();
    handleCloseImage();
  }
}

//Eventos abrir y cerrar
profileEditButton.addEventListener("click", handlePopupClick);
formElement.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", handleAddImageClick);
formCard.addEventListener("submit", handleAddCardSubmit);

addImagePopupElement
  .querySelector(".popup__close-button")
  .addEventListener("click", closeAddImagePopup);
addImagePopupElement
  .querySelector(".popup__form")
  .addEventListener("submit", handleAddImageFormSubmit);

// Event listeners for overlay clicks
overlayEdit.addEventListener("click", handleOverlayClick);
overlayAdd.addEventListener("click", handleOverlayClick);
overlayImage.addEventListener("click", handleOverlayClick);
document.addEventListener("keydown", closeWithEsc);