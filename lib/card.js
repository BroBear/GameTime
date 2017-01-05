var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Card = function(options) {
  this.x = options.x;
  this.y = options.y;
  this.height = options.height;
  this.width = options.width;
  this.suit = options.suit;
  this.number = options.number;
};






Card.prototype.create = function (cardTable) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.height, this.width);
  // cardTable.newDeck();
};










module.exports = Card;
