var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var Card = function(options) {
  this.x = options.x;
  this.y = options.y;
  this.suit = options.suit;
  this.number = options.number;
  this.imageSrc = "../images/" + this.suit + this.number + ".png";
};


Card.prototype.getImage = function (source) {

}


Card.prototype.create = function () {
  // console.log(dealHand);
  var xPos = this.x;
  var yPos = this.y;
  var image = this.imageSrc;
  cardImage = new Image();
  cardImage.src = image;
  context.drawImage(cardImage, xPos, yPos, 100, 200);
  // console.log(this);
  // cardImage.onload = function() {
  //   console.log(cardImage, xPos, yPos);
  // }
};











module.exports = Card;
