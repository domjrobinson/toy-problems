/*
Basic Set 2.3: Finding all matching objects in an array
Given an array of players (objects), return the names of all players that have a score above 100.

DO NOT use .filter() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/
const topPlayers = players => {
  let results = [];
  for (let key of players) {
    if (key.score > 100) {
      results.push(key.name);
    }
  }
  return results;
};
