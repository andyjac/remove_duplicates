var _ = require('lodash');

module.exports = function(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var haveSeen = {};
  var noDups = [];

  _.forEach(arr, function(item) {
    if (!haveSeen[item]) {
      noDups.push(item);
      haveSeen[item] = true;
    }
  });

  return noDups;
};
