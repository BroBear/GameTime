var Card = require('./card.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var _ = require("../node_modules/underscore");

var dealerHand = [];
var playerHand = [];
var endGame = false;
var playerScore = 0;
var dealerScore = 0;

function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
  this.deck = [];
  this.cardsDrawn = 0;
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

CardTable.prototype.topCard = function(){
  var count = this.deck[0];
  console.log(count);
  this.deck.splice(0, 1);
  return count;
}

CardTable.prototype.dealCards = function(cardDeck) {
  dealerHand = [];
  playerHand = [];
  card1 = this.topCard();
  card2 = this.topCard();
  card3 = this.topCard();
  card4 = this.topCard();
  card1.x = 10;
  card2.x = 120;
  card3.x = 10;
  card4.x = 120;

  dealerHand.push(card1, card2);
  playerHand.push(card3, card4);

  console.log(dealerHand);
  console.log(playerHand);
}

CardTable.prototype.getAnotherCard = function(cardDeck) {
  playerHand.push(this.topCard());
  for(var i=0; playerHand.length>i; i++){
    var image = playerHand[i].imageSrc;
    var cardImage = new Image();
    cardImage.src = image;
    context.drawImage(cardImage, playerHand[i].x, 220, 100, 200);
  }


}

CardTable.prototype.calculatePlayerPoints = function (currentHand) {
  playerHand.forEach(function(card){
    playerScore += Number(card.value);
    return playerScore;
    console.log("Player has " + playerScore);

  })
};
CardTable.prototype.displayPlayerPoints = function () {
  $('.player-score').append(`<div>Player has ${playerScore}</div>`);
}


CardTable.prototype.calculateDealerPoints = function (currentHand) {
  dealerHand.forEach(function(card){
    dealerScore += Number(card.value);
    return dealerScore;

  })
};
CardTable.prototype.displayDealerPoints = function () {
  $('.dealer-score').append(`<div>Dealer has ${dealerScore}</div>`);
}


var table = new CardTable(300,400, canvas, context);

$('.deal').on('click', function () {
  table.newDeck();
  table.calculatePlayerPoints();
  table.displayPlayerPoints();
  });

$('.hit').on('click', function () {
    console.log('I hit!!')
    table.getAnotherCard();
    table.displayPlayerPoints();

});

$('.stand').on('click', function () {
  endGame = true;
  var dealerPoints = table.calculateDealerPoints();
   while(dealerPoints < 17) {
     table.getAnotherCard();
     dealerPoints = table.calculatePoints(dealerHand);
   }
    table.displayDealerPoints();
});

module.exports = CardTable;
