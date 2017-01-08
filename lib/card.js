var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Card = function(options) {
  this.x = options.x || 230;
  this.y = options.y;
  this.suit = options.suit;
  this.number = options.number;
  this.value = options.value;
  this.imageSrc = "../images/" + this.suit + this.number + ".png";
};

Card.prototype.create = function () {
  // console.log(dealHand);
  var xPos = this.x;
  var yPos = this.y;
  var image = this.imageSrc;
  cardImage = new Image();
  cardImage.src = image;
  context.drawImage(cardImage, xPos, yPos, 100, 200);
};











module.exports = Card;
