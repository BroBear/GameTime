var Card = require('./card.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');




function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
};

// CardTable.prototype.draw = function(shuffledDeck) {
//   // var card1 = shuffledDeck.shift();
//   // var card2 = shuffledDeck.shift();
//   // var card3 = shuffledDeck.shift();
//   // var card4 = shuffledDeck.shift();
//   var cardsArray = [card1, card2, card3, card4];
//   // card1.x = 10;
//   // card2.x = 110;
//   // card3.x = 210;
//   // card4.x = 310;
//   console.log(card1, card2, card3, card4);
//   cardsArray.forEach(function(card) {
//     card.x
//     card.create();
//   });
//   // card1.create(this);
//   // card2.create(this);
//   // card3.create(this);
//   // card4.create(this);
// };

CardTable.prototype.newDeck = function () {
  var deck = [];
  var suits =['spades', 'hearts', 'diamonds', 'clubs'];
  var number=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  for (var i = 0; i < number.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var suit = suits[j];
      deck.push(new Card({x:0, y:0, height:80, width:110, suit:suit, number:number[i]}));
    }
  }
  this.shuffle(deck);
};
CardTable.prototype.shuffle = function (cards) {
  var newCards = [];
  for(var i = cards.length - 1; i >= 0; i--) {
    var index = Math.floor(Math.random() * i);
    var shuffledCard = cards.splice(index, 1);
    newCards.push(shuffledCard[0]);
  }
  this.dealCards(newCards);
}

CardTable.prototype.dealCards = function(cardDeck) {
  var dealHand = [];
  for(var i = 0; i <= 3; i++) {
    if(cardDeck[0]) {
      cardDeck[0].x = 10;
    } if(cardDeck[1]) {
      cardDeck[1].x = 120;
    } if(cardDeck[2]) {
      cardDeck[2].x = 230;
    } if(cardDeck[3]) {
      cardDeck[3].x = 340;
    }
    cardDeck[i].create();
  }
}
//
// CardTable.prototype.value = function () {
//     if (this.number == "jack" || "queen" || "king") {
//       console.log("i'm worth ten");
//         return [10];
//     } else if (this.number == "ace") {
//         return [11];
//     } else {
//         return this.number;
//     }
// };















  var table = new CardTable(300,400, canvas, context);

$('.deal').on('click', function () {
    table.newDeck();
    // table.draw();



  });

module.exports = CardTable;
