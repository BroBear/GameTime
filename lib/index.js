var CardTable = require('./cardTable.js');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var cardTable = new CardTable(300, 400, canvas, context);



// Create a full deck of cards
// assign suits
// Shuffle Deck
// Deal the card
// Define scoring rules
// Create hit and stand functionality/buttons
// Reset
// Add Card Graphics

requestAnimationFrame(function gameLoop() {
  cardTable.draw();
requestAnimationFrame(gameLoop);
});
