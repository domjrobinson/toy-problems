/*
Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.
*/

const characterFrequency = function(string) {
  let sortedString = string
    .toLowerCase()
    .split('')
    .sort();
  let uniqueChars = sortedString.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
  let output = [];
  for (let i = 0; i < uniqueChars.length; i++) {
    let inputedFlag = false;
    let count = sortedString.filter(char => char === uniqueChars[i]).length;
    let nestedArray = [uniqueChars[i], count];
    if (i === 0) {
      output.push(nestedArray);
      inputedFlag = true;
    }
    if (i > 0) {
      for (let j = 0; j < output.length; j++) {
        if (output[j][1] < nestedArray[1] && !inputedFlag) {
          output.splice(j, 0, nestedArray);
          inputedFlag = true;
        }
      }
    }
    if (!inputedFlag) {
      output.push(nestedArray);
    }
  }
  return output;
};
