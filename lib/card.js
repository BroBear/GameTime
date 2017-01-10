var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Card = function(options) {
  this.x = options.x;
  this.y = options.y;
  this.suit = options.suit;
  this.number = options.number;
  this.value = options.value;
  this.offset = options.offset;
  this.imageSrc = "../images/" + this.suit + this.number + ".png";
};

Card.prototype.create = function () {
  var xPos = this.x;
  var yPos = this.y;
  var off = this.offset;
  var image = this.imageSrc;
  cardImage = new Image();
  cardImage.src = image;
  context.drawImage(cardImage, xPos, yPos, 100, 200);
};











module.exports = Card;
