/*
Basic Set 3.3: Reducing an array of arrays
Given an array of arrays, return those arrays concatenated together.

DO NOT use arrays.reduce() or Function.prototype.apply

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const concatArrays = arrays => {
  let results = [];
  arrays = arrays.flat();

  for (let i = 0; i < arrays.length; i++) {
    results.push(arrays[i]);
  }
  return results;
};
