var Card = require('./card.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var _ = require("../node_modules/underscore");

var dealerHand = [];
var playerHand = [];
var endGame = false;

function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
  this.deck = []
};

CardTable.prototype.currentHand = function() {
  for(var i=0; dealerHand.length>i; i++){
    var image = dealerHand[i].imageSrc;
    var cardImage = new Image();
    cardImage.src = image;
    if(!endGame && i === 0){
      cardImage.src = "../images/cardBack.png"
      context.drawImage(cardImage, dealerHand[i].x, 0, 100, 200);
    } else {
      context.drawImage(cardImage, dealerHand[i].x, 0, 100, 200);
    }
  }
  for(var i=0; playerHand.length>i; i++){
    var image = playerHand[i].imageSrc;
    var cardImage = new Image();
    cardImage.src = image;
    context.drawImage(cardImage, playerHand[i].x, 0, 100, 200);
  }
};




CardTable.prototype.newDeck = function () {
  this.deck = []
  var suits =['spades', 'hearts', 'diamonds', 'clubs'];
  var number=["2","3","4","5","6","7","8","9","10","11","12","13","14"];
  for (var i = 0; i < number.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var suit = suits[j];
      this.deck.push(new Card({x:0, y:0, suit:suit, number:number[i]}));
    }
  }
  this.shuffle();
};
CardTable.prototype.shuffle = function() {
  this.deck = _.shuffle(this.deck);
  this.dealCards(this.deck);
}




//   console.log('shuffling');
//   var newCards = [];
//   for(var i = this.deck.length - 1; i >= 0; i--) {
//     var index = Math.floor(Math.random() * i);
//     var shuffledCard = this.deck.splice(index, 1);
//     newCards.push(shuffledCard[0]);
//   }
//   this.dealCards(newCards);
// }

CardTable.prototype.dealCards = function(cardDeck) {
  dealerHand = [];
  playerHand = [];
  console.log('dealingCards');
  cardDeck[0].x = 10;
  cardDeck[1].x = 120;
  cardDeck[2].x = 230;
  cardDeck[3].x = 340;

  dealerHand.push(cardDeck[0], cardDeck[1]);
  playerHand.push(cardDeck[2], cardDeck[3]);
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
  });

$('.hit').on('click', function () {
    console.log('I hit!!')
    table.dealPlayerNextCard();
    console.log(table.playerHand)
    });

module.exports = CardTable;
