/*
Basic Set 3.1: Reducing an array of numbers
Given an array of numbers, return the sum of those numbers.

DO NOT use numbers.reduce()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const sum = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
