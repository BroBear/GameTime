var Card = require('./card.js');
var _ = require("../node_modules/underscore");

function CardTable (height, width, canvas, ctx) {
  this.height = height;
  this.width = width;
  this.canvas = canvas;
  this.ctx = ctx;
  this.deck = [];
  this.cardsDrawn = 0;
  this.playerTotal = 0;
  this.dealerTotal = 0;
  this.dealerHand = [];
  this.playerHand = [];
  this.endGame = false;
}

CardTable.prototype.currentHand = function() {
  for(var i=0; this.dealerHand.length>i; i++){
    var image = this.dealerHand[i].imageSrc;
    var cardImage = new Image();
    cardImage.src = image;
    if(!this.endGame && i === 0){
      cardImage.src = "../images/cardBack.png";
      this.ctx.drawImage(cardImage, this.dealerHand[i].x, 0, 100, 200);
    } else {
        this.ctx.drawImage(cardImage, this.dealerHand[i].x, 0, 100, 200);
    }
  }
  for(var i=0; this.playerHand.length>i; i++){
    var image = this.playerHand[i].imageSrc;
    var cardImage = new Image();
    cardImage.src = image;
    this.ctx.drawImage(cardImage, this.playerHand[i].x, 220, 100, 200);
  }
};
CardTable.prototype.newDeck = function () {
  this.deck = [];
  var suits =['spades', 'hearts', 'diamonds', 'clubs'];
  var number=[2,3,4,5,6,7,8,9,10,11,12,13,14];
  for (var i = 0; i < number.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var suit = suits[j];
      if (number[i] > 11) {
      this.deck.push(new Card({x:0, y:0, ctx:this.ctx, suit:suit, number:number[i], value:10}));
    } else {
      this.deck.push(new Card({x:0, y:0, ctx:this.ctx, suit:suit, number:number[i], value:number[i]}));
     }
    }
  }
  this.shuffle();
};
CardTable.prototype.shuffle = function() {
  this.deck = _.shuffle(this.deck);
  this.dealCards(this.deck);
};

CardTable.prototype.topCard = function(){
  var count = this.deck[0];
  this.deck.splice(0, 1);
  return count;
};

CardTable.prototype.dealCards = function(cardDeck) {
  this.playerTotal = 0;
  this.dealerTotal = 0;
  this.dealerHand = [];
  this.playerHand = [];
  card1 = this.topCard();
  card2 = this.topCard();
  card3 = this.topCard();
  card4 = this.topCard();
  card1.x = 10;
  card2.x = 120;
  card3.x = 10;
  card4.x = 120;
  this.dealerHand.push(card1, card2);
  this.playerHand.push(card3, card4);
};

CardTable.prototype.playerHit = function(cardDeck) {
  var newCard = this.topCard();
  var xForCard = ((this.playerHand.length * 110) + 10);
  newCard.x = xForCard;
  this.playerHand.push(newCard);
};

CardTable.prototype.calculateDealerPoints = function (currentHand) {
  this.dealerTotal = 0;
  for(var i=0; this.dealerHand.length>i; i++){
    this.dealerTotal = this.dealerHand[i].value + this.dealerTotal;
  }
};

CardTable.prototype.checkForDealerBusts = function () {
  if (this.dealerTotal > 21) {
    $('.dealer-message').text("Dealer busted. You Win!");
    return true;
  } else {
    return false;
  }
};

CardTable.prototype.calculatePlayerPoints = function (currentHand) {
  this.playerTotal = 0;
  for(var i=0; this.playerHand.length>i; i++){
    this.playerTotal = this.playerHand[i].value + this.playerTotal;

  }
};

CardTable.prototype.checkForPlayerBusts = function () {
  if (this.playerTotal > 21) {
    $('.player-message').text("You busted. Better luck next time!");
    $('.hit').attr('disabled', true);
    $('.stand').attr('disabled', true);
    return true;
  } else {
    return false;
  }
};

CardTable.prototype.score = function () {
  if (this.dealerTotal < 17) {
    while(this.dealerTotal < 17) {
      this.dealerHit();
      }
      this.checkForDealerBusts();
    } else if (this.dealerTotal > this.playerTotal && this.dealerTotal <= 21) {
      $('.player-message').text("you lost, press reset to play again");
    } else if (this.playerTotal > this.dealerTotal) {
      $('.player-message').text("you won!, press reset to play again");
    } else if (this.dealerTotal === this.playerTotal) {
      $('.player-message').text("it's a draw! no one wins, press reset to play again");
    }
      this.calculateDealerPoints();
      $('hit').attr('disabled', true);
  };

CardTable.prototype.dealerHit = function(cardDeck) {
    var newCard = this.topCard();
    var xForCard = ((this.dealerHand.length * 110) + 10);
    newCard.x = xForCard;
    this.dealerHand.push(newCard);
    this.dealerTotal = 0;
    for(var i=0; this.dealerHand.length>i; i++){
      this.dealerTotal = this.dealerHand[i].value + this.dealerTotal;
    }
    this.score();
  };

CardTable.prototype.displayPlayerPoints = function () {
  $('.player-score').append(`<div>Player has ${this.playerTotal}</div>`);
    if(this.playerTotal === 21 && this.playerHand.length === 2) {
      $(".stand").click();
    }
};

CardTable.prototype.displayDealerPoints = function () {
  $('.dealer-score').append(`<div>Dealer has ${this.dealerTotal}</div>`);
};





module.exports = CardTable;
