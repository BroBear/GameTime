var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Card = function(x, y, height, width, suit, number) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.suit = suit;
  this.number = number;
};

Card.prototype.drawCards = function (cardTable) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.height, this.width);
  cardTable.generateCardDeck();
};










module.exports = Card;
