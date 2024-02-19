/**
 * TODO:
 * uhmm... Simply delete everything except this comment
 */

//  1. Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

//  2. Function to subtract two numbers
function subtractNumbers(a, b) {
  return a - b;
}

//  3. Function to multiply two numbers
function multiplyNumbers(a, b) {
  return a * b;
}

//  4. Function to divide two numbers
function divideNumbers(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: Division by zero is not allowed.";
  }
}

//  5. Function to find the maximum of two numbers
function findMax(a, b) {
  return Math.max(a, b);
}

//  6. Function to find the minimum of two numbers
function findMin(a, b) {
  return Math.min(a, b);
}

//  7. Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

//  8. Function to check if a number is odd
function isOdd(num) {
  return num % 2 !== 0;
}

//  9. Function to calculate the square of a number
function squareNumber(num) {
  return num * num;
}

//  10. Function to calculate the cube of a number
function cubeNumber(num) {
  return num * num * num;
}

//  11. Function to calculate the sum of an array of numbers
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//  12. Function to find the average of an array of numbers
function averageArray(array) {
  let sum = sumArray(array);
  return sum / array.length;
}

//  13. Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

//  14. Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = reverseString(str);
  return str === reversedStr;
}

//  15. Function to find the length of the longest word in a string
function longestWordLength(str) {
  const words = str.split(" ");
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

//  16. Function to find the longest word in a string
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
