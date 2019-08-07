const mergeSort = nums => {
  // check if list has less than 2 element
  if (nums.length < 2) {
    // return array
    return nums;
  }

  // initialize a constant to keep the length of the array
  const length = nums.length;
  // evaluate the middle of the array, save to constant
  const middle = Math.floor(length / 2);
  // slice the array in left
  const left = nums.slice(0, middle);
  // slice the array into right
  const right = nums.slice(middle);
  // return the result of calling stitch on left && right
  return stitch(mergeSort(left), mergeSort(right));
};

const stitch = (left, right) => {
  // inialize a constant to hold results
  const results = [];
  // while left && right are both truthy
  while (left.length && right.length) {
    // check if left[0] <= right[0]
    if (left[0] <= right[0]) {
      // if true, push left[o].shift() into results
      results.push(left.shift());
    }
    // else push right[0].shift() into results
    else {
      results.push(right.shift());
    }
  }
  // return results, and concat left & right
  return [...results, ...left, ...right];
};

mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);
