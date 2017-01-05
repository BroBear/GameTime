var Card = require('./card.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');




function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
};

CardTable.prototype.draw = function(shuffledDeck) {
  var card1 = shuffledDeck.shift();
  var card2 = shuffledDeck.shift();
  var card3 = shuffledDeck.shift();
  var card4 = shuffledDeck.shift();
  card1.x = 10;
  card2.x = 110;
  card3.x = 210;
  card4.x = 310;
  console.log(card1, card2, card3, card4);
  card1.create(this);
  card2.create(this);
  card3.create(this);
  card4.create(this);
  // var card = new Card({x:50, y:20, height:80, width:110});
  // var card2 = new Card({x:200, y:20, height:80, width:110});
  // card.create(this);
  // card2.create(this);
};

CardTable.prototype.newDeck = function () {
  var deck = [];
  var suits =['spades', 'hearts', 'diamonds', 'clubs'];
  for (var number = 1; number <= 13; number++) {
    for (var i = 0; i < suits.length; i++) {
      var suit = suits[i];
      deck.push(new Card({x:50, y:20, height:80, width:110, suit:suit, number:number}));
    }
  }
  // return deck;
  this.shuffle(deck);
};
CardTable.prototype.shuffle = function (cards) {
  var newCards = [];
  for(var i = cards.length - 1; i >= 0; i--) {
    var index = Math.floor(Math.random() * i);
    var shuffledCard = cards.splice(index, 1);
    newCards.push(shuffledCard[0]);
  }
  // console.log(newCards);
  this.draw(newCards);
  // return newCards;
}


// CardTable.prototype.generateCardDeck = function() {
//   var cards = [];
//   var suit, number;
//
//   for (i=0;i<52;i++) {
//       suit = i%4+1;
//       number = i%13+1;
//       cards.push(new Card(50,20, 80, 110, suit, number));
//     }
//     console.log(cards);
//   };












  var table = new CardTable(300,400, canvas, context);

$('.deal').on('click', function () {
    table.newDeck();
    table.draw();
    // table.shuffle();


  });

module.exports = CardTable;
