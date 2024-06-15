const template = document.querySelector(".tempalte-card");

export default class Card {
  constructor(title, link) {
    this.title= title;
    this.link= link;
    this.card= this.getTemplate());
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".template-card"); //---.element
  }
  setProperties() {
    this.cardImage = this.card.querySelector(".card__photo");
    this.cardTitle = this.card.querySelector(".card__info-name");
    this.likeButton = this.card.querySelector(".card__like-button");
    this.deleteButton = this.card.querySelector(".card__delete-button");
    this.cardImage.src = this.link;
    this.cardTitle.textContent = this.name;
  }
  handleLike() {
    this.likeButton.classList.toggle("element__photo-heart_active");
  }
  handleRemoveCard() {
    this.card.remove();
  }
  setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      this.handleLike();
    });
  }
  this.deleteButton.addEventListener("click", () => {
    this.handleRemoveCard();
  });