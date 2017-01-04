var Card = require('./card.js');
var card = new Card(50, 20, 80, 110);
var card2 = new Card(200, 20, 80, 110);

function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
};

CardTable.prototype.cardDeck = function() {
  var cards = [];
  var suit, number;

  for (i=0;i<52;i++) {
      suit = i%4+1;
      number = i%13+1;
      cards.push(new Card(suit, number));
    }
    console.log(cards)
  };

CardTable.prototype.draw = function() {
  card.drawCards();
  card2.drawCards();
}
