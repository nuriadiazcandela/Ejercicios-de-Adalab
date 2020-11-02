'use strict';

// const oneSquare = new Square();
// console.log(oneSquare.perimeter(9));
// console.log(oneSquare.area(9));

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

const One = new Square(1);
const Three = new Square(3);
const Seven = new Square(7);

console.log(One.perimeter());
console.log(One.area());

console.log(Three.perimeter());
console.log(Three.area());

console.log(Seven.perimeter());
console.log(Seven.area());
