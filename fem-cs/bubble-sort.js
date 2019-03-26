const bubbleSort = nums => {
  let swapped = false;
  do {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i + 1] = temp
        swapped = true;
      };
    };
  } while (swapped);
};
