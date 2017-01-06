var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Card = function(options) {
  this.x = options.x;
  this.y = options.y;
  this.height = options.height;
  this.width = options.width;
  this.suit = options.suit;
  this.number = options.number;
  this.imageSrc = "../images/" + this.suit + this.number + ".png";
};



Card.prototype.create = function (cardTable) {
  var xPos = this.x;
  var yPos = this.y;
  var image = this.imageSrc;
  // context.fillStyle = "red";
  // context.fillRect(this.x, this.y, this.height, this.width);
  cardImage = new Image();
  cardImage.src = image;
  cardImage.onload = function() {
    context.drawImage(cardImage, xPos, yPos, 100, 200);
    console.log(xPos, yPos);
  }
};

// Card.prototype.image = function () {
//     return "images/" + this.number + "_of_" + this.suit + ".png";
// };









module.exports = Card;
