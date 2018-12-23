/*
Is Subset Of
Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.
*/

Array.prototype.isSubsetOf = function(arr) {
  var subObj = {};
  for (var i = 0; i < this.length; i++) {
    subObj[this[i]] = this[i];
  }
  for (var key in subObj) {
    if (arr.includes(subObj[key]) !== true) {
      return false;
    }
  }
  return true;
};
