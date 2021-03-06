// BubbleSort V.2
// Bubble sort is considered the most basic sorting algorithm in Computer Science.It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

//   NOTE: DO NOT use JavaScript’s built -in sorting function (Array.prototype.sort).

const bubbleSort = (array, sorted = false) => {
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      let current = array[i];
      let next = array[i + 1];
      if (current > next) {
        array[i] = next;
        array[i + 1] = current;
        sorted = false;
      }
    }
  }
  return array;
};
