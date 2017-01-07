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
    context.drawImage(cardImage, playerHand[i].x, 220, 100, 200);
  }
};
CardTable.prototype.newDeck = function () {
  this.deck = []
  var suits =['spades', 'hearts', 'diamonds', 'clubs'];
  var number=[2,3,4,5,6,7,8,9,10,11,12,13,14];
  for (var i = 0; i < number.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var suit = suits[j];
      if (number[i] > 11) {
      this.deck.push(new Card({x:0, y:0, suit:suit, number:number[i], value:10}));
    } else {
      this.deck.push(new Card({x:0, y:0, suit:suit, number:number[i], value:number[i]}));
     }
    }
  }
  this.shuffle();
};
CardTable.prototype.shuffle = function() {
  this.deck = _.shuffle(this.deck);
  this.dealCards(this.deck);
}

CardTable.prototype.dealCards = function(cardDeck) {
  dealerHand = [];
  playerHand = [];
  cardDeck[0].x = 10;
  cardDeck[1].x = 120;
  cardDeck[2].x = 10;
  cardDeck[3].x = 120;

  dealerHand.push(cardDeck[0], cardDeck[1]);
  playerHand.push(cardDeck[2], cardDeck[3]);
  console.log(dealerHand);
  console.log(playerHand);
}

CardTable.prototype.calculatePlayerPoints = function (currentHand) {
  var playerScore = 0;
  playerHand.forEach(function(card){
    playerScore += Number(card.value);
    console.log(playerScore);

  })
};
CardTable.prototype.calculateDealerPoints = function (currentHand) {
  var dealerScore = 0;
  dealerHand.forEach(function(card){
    dealerScore += Number(card.value);
    console.log(dealerScore);

  })
};


var table = new CardTable(300,400, canvas, context);

$('.deal').on('click', function () {
  table.newDeck();
  table.calculatePlayerPoints();
  table.calculateDealerPoints();
  });

$('.hit').on('click', function () {
    console.log('I hit!!')
    table.dealPlayerNextCard();

    });

module.exports = CardTable;
