/*
Basic Set 3.2: Reducing an array of strings
Given an array of strings, return all strings concatenated together.

DO NOT use strings.reduce() or strings.join('')

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const concatStrings (strings) => {
  let str = '';

  for (let i = 0; i < strings.length; i++) {
    str += strings[i];
  }
  return str;
}
