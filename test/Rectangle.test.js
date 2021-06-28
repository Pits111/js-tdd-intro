const assert = require('assert');
const Rectangle = require('../Rectangle');

const rectangle_1 = new Rectangle(10, 10);
const rectangle_2 = new Rectangle(9, 12);
const rectangle_3 = new Rectangle(2, 7);
const rectangle_4 = new Rectangle(3, 6);

describe('Rectangle', () => {

    it('is square', () =>{
        assert.strictEqual( rectangle_1.isSquare(), true);
        assert.strictEqual( rectangle_2.isSquare(), false);
    });

    it('get area', () => {
        assert.strictEqual( rectangle_3.getArea(), 14);
    });

    it('calculates perimeter', () => {
        assert.strictEqual( rectangle_4.getPerimeter(), 18);
    });

})