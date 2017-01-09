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
  this.deck = [];
  this.cardsDrawn = 0;
  this.playerTotal = 0;
  this.dealerTotal = 0;
  this.limit = 21;
  this.dealerlimit = 17;
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
  this.deck = [];
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

CardTable.prototype.playerHit = function(cardDeck) {
  playerHand.push(this.topCard());
  for(var i=0; playerHand.length>i; i++){
    var image = playerHand[i].imageSrc;
    var cardImage = new Image();
    cardImage.src = image;
    context.drawImage(cardImage,playerHand[i], 220, 100, 200);
  }
};

CardTable.prototype.calculateDealerPoints = function (currentHand) {
  this.dealerTotal = 0;
  for(var i=0; dealerHand.length>i; i++){
    this.dealerTotal = dealerHand[i].value + this.dealerTotal;
  }
};
CardTable.prototype.calculatePlayerPoints = function (currentHand) {
  this.playerTotal = 0;
  for(var i=0; playerHand.length>i; i++){
    this.playerTotal = playerHand[i].value + this.playerTotal;

  }
};

CardTable.prototype.checkForPlayerBusts = function () {
  if (this.playerTotal > 21) {
    $('.player-message').text("You busted. Better luck next time!");
    return true;
  } else {
    return false;
  }
};


CardTable.prototype.score = function () {
  console.log(this.dealerTotal);
  if (this.dealerTotal < 17) {
    while(this.dealerTotal < 17) {
      table.dealerHit();
      }
    }
    else if (this.dealerTotal === this.playerTotal) {
        $('.player-message').text("it's a draw, press reset to play again");
    }
    else if (this.playerTotal === 21) {
        $('.player-message').text("BLACKJACK! You won! Press reset to play again");
    } else if (this.dealerTotal > this.playerTotal) {
          $('.player-message').text("you lost, press reset to play again");
      } 
  }




CardTable.prototype.dealerHit = function(cardDeck) {

    dealerHand.push(this.topCard());
    for(var i=0; dealerHand.length>i; i++){
      this.dealerTotal = dealerHand[i].value + this.dealerTotal;
      var image = dealerHand[i].imageSrc;
      var cardImage = new Image();
      cardImage.src = image;
      context.drawImage(cardImage, dealerHand[i], 220, 100, 200);
    }
    this.score();
  }






CardTable.prototype.checkForDealerBusts = function () {
  if (this.dealerTotal > 21) {
    $('.dealer-message').text("Dealer busted. You Win!");
    return true;
  }
};

CardTable.prototype.displayPlayerPoints = function () {
  $('.player-score').append(`<div>Player has ${this.playerTotal}</div>`);
}

CardTable.prototype.displayDealerPoints = function () {
  $('.dealer-score').append(`<div>Dealer has ${this.dealerTotal}</div>`);
}


var table = new CardTable(300,400, canvas, context);

$('.deal').on('click', function () {
  table.newDeck();
  table.checkForPlayerBusts();
  table.calculatePlayerPoints();
  table.displayPlayerPoints();
  // table.score();
  $('.deal').attr('disabled', true);
  });

$('.hit').on('click', function () {
    console.log('I hit!!')
    table.playerHit();
    table.calculatePlayerPoints();
    table.displayPlayerPoints();
    table.checkForPlayerBusts();
    // table.score();

});

$('.stand').on('click', function () {
  endGame = true;
  // table.dealerHit();
  table.calculateDealerPoints();
  table.displayDealerPoints();
  table.score();
});

module.exports = CardTable;
