var CardTable = require('./cardTable.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var imageArray = require("./loader.js")
var underScore = require("../node_modules/underscore");

var cardTable = new CardTable(300, 400, canvas, context);

window.addEventListener("load", function(){
})

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cardTable.currentHand();
requestAnimationFrame(gameLoop);
});

$('.deal').on('click', function () {
  cardTable.newDeck();
  cardTable.checkForPlayerBusts();
  cardTable.calculatePlayerPoints();
  cardTable.displayPlayerPoints();
  $('.deal').attr('disabled', true);
  $('.hit').attr('disabled', false);
  $('.stand').attr('disabled', false);
  });

$('.hit').on('click', function () {
    cardTable.playerHit();
    cardTable.calculatePlayerPoints();
    cardTable.displayPlayerPoints();
    cardTable.checkForPlayerBusts();
});

$('.stand').on('click', function () {
  cardTable.endGame = true;
  cardTable.calculateDealerPoints();
  cardTable.score();
  cardTable.displayDealerPoints();
  $('.deal').attr('disabled', true);
  $('.hit').attr('disabled', true);
  $('.stand').attr('disabled', true);
});

$('.reset').on('click', function () {
  cardTable.endGame = false;
  cardTable.deck = [];
  cardTable.playerHand = [];
  cardTable.dealerHand = [];
  cardTable.calculatePlayerPoints();
  $('.dealer-score').text("");
  $('.dealer-message').text("");
  $('.player-score').text("");
  $('.player-message').text("");
  $('.deal').attr('disabled', false);
})
