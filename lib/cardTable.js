var Card = require('./card.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
};
CardTable.prototype.draw = function() {
  var card = new Card(50, 20, 80, 110);
  var card2 = new Card(200, 20, 80, 110);
  card.drawCards(this);
  card2.drawCards(this);
};

CardTable.prototype.generateCardDeck = function() {
  var cards = [];
  var suit, number;

  for (i=0;i<52;i++) {
      suit = i%4+1;
      number = i%13+1;
      cards.push(new Card(50,20, 80, 110, suit, number));
      console.log(cards)
    }
  };

  var table = new CardTable(300,400, canvas, context);


  $('.deal').on('click', function () {
    table.draw();
    console.log(Card)
  });

module.exports = CardTable;
