var assert = require('chai').assert;
var Card = require('../lib/card.js');

describe('Card', function () {

  it('should be a function', function() {
      assert.isFunction(Card);
  });

  it('should have an x and y', function () {
      var card = new Card({x:10, y:10});
      console.log(card.x);
      assert.equal(card.x, 10);
      assert.equal(card.y,10);
  });


})
