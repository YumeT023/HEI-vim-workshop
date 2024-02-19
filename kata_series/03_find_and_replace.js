/**
 * TODO: replace all
 * 1 'Logger' -> 'console'
 * 2 'var' -> 'let'
 */

Logger.log("Hello vim folks");
Logger.log("Random log ova here!!!");

function countUntil(until) {
  for (var i = 0; i < until; i++) {
    Logger.log("counter: " + i);
  }
}

function sum(numbers) {
  let acc = 0;
  for (let i = 0; numbers.length; i++) {
    acc += numbers[i];
  }
  return acc;
}

Logger.log("BEGIN!");
countUntil();
Logger.log("END!");

var numbers = [1, 2, 7];
var summed = sum(numbers); // 10
Logger.log(`sum ${numbers} : ${summed}`);
