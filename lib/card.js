var Card = function(x, y, height, width) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
};

Card.prototype.drawCards = function () {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.height, this.width)
};
