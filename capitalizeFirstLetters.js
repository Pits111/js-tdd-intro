// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

const capitalizeFirstLetters = (input) => {
  if( input.length < 0 ) {
    return "";
  }

  return input.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");

}

console.log(capitalizeFirstLetters("i am learning TDD"))

// // Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// // Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// // Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('live is good'), 'Live Is Good');

// // Check that capitalizeFirstLetters transforms multiple words correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// // Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('is this working'), 'Is This Working');

// // Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');