export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
export const profileNameElement = document.querySelector(".profile__name");
export const profileAboutElement = document.querySelector(".profile__about");
export const profileName = profileNameElement.textContent;
export const profileAbout = profileAboutElement.textContent;
export const profileEditButton = document.querySelector(".profile__edit-button");
export const editPopupElement = document.querySelector(".popup");

export const formElement = document.querySelector(".popup__form");
export const nameInput = document.querySelector(".popup__input_name");
export const aboutInput = document.querySelector(".popup__input_about");
export const closeButtonPopup = document.querySelector(".popup__close-button");

//Popup agregar imagenes
export const profileAddButton = document.querySelector(".profile__add-button");
export const addImagePopupElement = document.querySelector("#add-image-popup");
export const titleInput = document.querySelector(".popup__input_title");
export const imageInput = document.querySelector("#popup__input_image");
//Template cards
export const templateCard = document.querySelector(".template-card");
export const cardArea = document.querySelector(".cards");

export const groupImage = document.getElementById("add-image-popup");
export const formCard = groupImage.querySelector(".popup__form");

//Popup imagenes
export const popupImageOpen = document.querySelector("#popup_image-open");
export const closeImage = document.querySelector("#popup__close-image");
export const popupImageTitle = document.querySelector(".popup__image-title");
export const popupImage = document.querySelector(".popup__image");
export let initialProfileName = profileName;
export let initialProfileAbout = profileAbout;
//Overlays
export const overlayEdit = document.querySelector("#popup-overlay-edit");
export const overlayAdd = document.querySelector("#popup-overlay-add");
export const overlay