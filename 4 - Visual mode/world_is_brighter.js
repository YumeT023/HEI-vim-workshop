/**
 * TODO: 
 * play around!!!
 */

// undo after each 
// * 1 visually replace 'i' on the 'for (area)'
// * 2 turn this to infinite loop 'for (;;)'
// * 3 delete "iter: ", simply log the 'i' var
for (let i = 0; i < 10; i++) {
  console.log("iter: " + i);
}

// undo after each
// * 1 visually replace ')' with ');' to add semicolons
// * 2 delete inside '{}'
// * 3 replace 'console' with 'Logger':
//   - by find replace-ing
//   - visually using c-v 
// * 4 turn first char of these strings to lowercase, hint: use c-v
function doComplexStuff() {
  console.log("This")
  console.log("Is")
  console.log("Way")
  console.log("Too")
  console.log("Complex")
  console.log("That")
  console.log("It")
  console.log("Is")
  console.log("Worth")
  console.log("Deleting...")
}

function sum(a, b) {
  return a + b;
}

// sums [2, 3, 4] numbers
// TODO: replace the callback inside reduce() with the above sum function
// hint: use "v i ( c" to replace stuff inside (
[2, 3, 4].reduce((a, b) => a + b, 0)
