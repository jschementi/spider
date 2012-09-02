var spider = require('../main');
var assert = require('assert');

var expectedState = {a:1};

spider()
.route('www.nytimes.com', '*', function (window, $, actualState) {
  console.log("assert actual: %s, expected: %s", JSON.stringify(actualState), JSON.stringify(expectedState));
  assert.equal(actualState, expectedState);
})
.get('http://www.nytimes.com', null, expectedState)
.log('debug')
;
