var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var card = new Card(50, 20, 80, 110);
var card2 = new Card(200, 20, 80, 110);
var cards = [];


function Card (x, y, height, width) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
};

// Create a full deck of cards
// assign suits
// Shuffle Deck
// Deal the card
// Define scoring rules
// Create hit and stand functionality/buttons
// Reset
// Add Card Graphics

function cardDeck() {
  var newCards = function (){
    var i,
        suit,
        number;
    for (i=0;i<52;i++) {
      suit = i%4+1;
      number = i%13+1;
      cards.push(new Card(suit, number));
    }
   }
   console.log(cards)
  };


Card.prototype.drawCards = function () {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.height, this.width)
};

requestAnimationFrame(function gameLoop() {
card.drawCards();
card2.drawCards();
requestAnimationFrame(gameLoop);
});
