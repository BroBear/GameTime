var CardTable = require('./cardTable.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var imageArray = require("./loader.js")
var underScore = require("../node_modules/underscore");
console.log(underScore);

var cardTable = new CardTable(300, 400, canvas, context);

window.addEventListener("load", function(){
  console.log(cardTable);
})


// Create a full deck of cards
// assign suits
// Shuffle Deck
// Deal the card
// Define scoring rules
// Create hit and stand functionality/buttons
// Reset
// Add Card Graphics
//
requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  cardTable.currentHand();
requestAnimationFrame(gameLoop);
});
