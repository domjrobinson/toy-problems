/*
Basic Set 2.1: Finding all matching strings in an array
Given a length (number) and an array of strings, return all strings that are greater than or equal to the given length.

DO NOT use .filter() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const filterLength = (length, array) => {
  var results = [];
  // Write your code here, and
  // return your final answer.
  for (var i = 0; i < array.length; i++) {
    if ((array[i].length >= length) & (array.length !== 0)) {
      results.push(array[i]);
    }
  }
  return results;
};
