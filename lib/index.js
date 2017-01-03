var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var card = new Card(50, 50, 50 , 50);
var card2 = new Card(100, 100, 50, 50);

function Card (x, y, height, width) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.number = Math.floor(Math.random()* 52 + 1);
};

Card.prototype.deal = function () {
  var card = Math.floor(Math.random()* 52 + 1);
};

Card.prototype.drawCards = function () {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.height, this.width)
  console.log(this.number);
};

requestAnimationFrame(function gameLoop() {
card.drawCards();
card2.drawCards();
card.deal();
requestAnimationFrame(gameLoop);
});
