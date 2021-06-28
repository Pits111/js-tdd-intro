const assert = require('assert');

const capitalizeFirstLetters = (input) => {
  if( input.length < 0 ) {
    return "";
  }

  return input.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

console.log(capitalizeFirstLetters("i am learning TDD"))

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('goHome'), 'GoHome');

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirstLetters('b'), 'B');

assert.strictEqual(capitalizeFirstLetters(''), '');