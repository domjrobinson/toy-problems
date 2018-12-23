/*
Basic Set 2.2: Finding all matching numbers in an array
Given an array of numbers, return all even numbers from the array.

DO NOT use .filter() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const findEven = numbers => {
  let results = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      results.push(numbers[i]);
    }
  }
  return results;
};
