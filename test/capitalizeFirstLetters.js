const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters')


describe('capitalizeFirstLetters', () => {
    it('is a function accepting one argument', () =>{
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms javascript correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('goHome'), 'GoHome');
    });

    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('b'), 'B');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
      });

    it('works on a string with multiple words', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });
})