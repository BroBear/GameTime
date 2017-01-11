var assert = require('chai').assert;
var CardTable = require('../lib/cardTable.js');

describe('CardTable', function () {

  it('should be a function', function() {
      assert.isFunction(CardTable);
  });

  it('should have an height and width', function () {
      var cardTable = new CardTable(10,10);
      assert.equal(cardTable.width, 10);
      assert.equal(cardTable.height,10);
  });

  it('should take the third argument and set it as the "canvas" property of the instantiated object', function () {
  var cardTable = new CardTable(10,10, 300);
  assert.equal(cardTable.canvas, 300);
  });

  it('should take the fourth argument and set it as the "context" property of the instantiated object', function () {
  var cardTable = new CardTable(10,10, 300, 400);
  assert.equal(cardTable.ctx, 400);
  });

  it('should have a method called "currentHand()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.currentHand);
  });

  it('should have a method called "newDeck()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.newDeck);
  });

  it('should have a method called "dealCards()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.dealCards);
  });

  it('should have a method called "calculateDealerPoints()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.calculateDealerPoints);
  });

  it('should have a method called "checkForDealerBusts()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.checkForDealerBusts);
  });

  it('should have a method called "calculatePlayerPoints()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.calculatePlayerPoints);
  });

  it('should have a method called "checkForPlayerBusts()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.checkForPlayerBusts);
  });

  it('should have a method called "score()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.score);
  });

  it('should have a method called "dealerHit()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.dealerHit);
  });

  it('should have a method called "displayPlayerPoints()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.displayPlayerPoints);
  });

  it('should have a method called "displayDealerPoints()"', function () {
    var cardTable = new CardTable(10,10, 300, 400);
    assert.isFunction(cardTable.displayDealerPoints);
  });



})
