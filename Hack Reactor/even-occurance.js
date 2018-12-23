/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.
*/

const evenOccurrence = array => {
  let storage = {};

  array.forEach(function(value, index) {
    storage[value] = storage[value] + 1 || 1;
  });

  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    if (storage[current] % 2 === 0) {
      return current;
    }
  }
  return null;
};
