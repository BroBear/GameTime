var assert = require('chai').assert;
var CardTable = require('../lib/cardTable.js');

describe('CardTable', function () {

  it('should be a function', function() {
      assert.isFunction(CardTable);
  });

  it('should have an height and width', function () {
      var cardTable = new CardTable(10,10);
      console.log(cardTable.width);
      assert.equal(cardTable.width, 10);
      assert.equal(cardTable.height,10);
  });


})
