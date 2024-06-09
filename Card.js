const template = document.querySelector(".tempalte-card");

export default class Card {
  constructor(title, link) {
    this.title= title;
    this.link= link;
    this.card= this.templateCard();
  }
  templateCard() {
    return template.cloneNode(true).content.querySelector(".template-card");

  }
  setProperties() {
    this.cardImage = this.card.querySelector(".card__photo");
    this.cardTitle = this.card.querySelector(".card__info-name");
    this.likeButton = this.card.querySelector(".card__like-button");
    this.deleteButton = this.card.querySelector(".card__delete-button");
    this.cardImage.src = this.link;
    this.cardImage.textContent = this.name;
  }
  cardGenerator() {
    return this.card;
  }
