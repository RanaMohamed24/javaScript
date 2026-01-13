 class Shape {
  static count = 0;

  constructor() {
    Shape.count++;
  }

  area() {
    throw new Error("Method not implemented");
  }

  perimeter() {
    throw new Error("Method not implemented");
  }

  toString() {
    return `Area = ${this.area()}, Perimeter = ${this.perimeter()}`;
  }

  static getCount() {
    return Shape.count;
  }
}

class Rectangle extends Shape {
  static instance = null;

  constructor(width, height) {
    if (Rectangle.instance) {
      throw new Error("Only one Rectangle is allowed");
    }
    super();
    this.width = width;
    this.height = height;
    Rectangle.instance = this;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `Rectangle -> ${super.toString()}`;
  }
}


 class Square extends Shape {
  static instance = null;

  constructor(side) {
    if (Square.instance) {
      throw new Error("Only one Square is allowed");
    }
    super();
    this.side = side;
    Square.instance = this;
  }

  area() {
    return this.side ** 2;
  }

  perimeter() {
    return 4 * this.side;
  }

  toString() {
    return `Square -> ${super.toString()}`;
  }
}
 class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle -> ${super.toString()}`;
  }
}




const r = new Rectangle(10, 5);
const s = new Square(4);
const c = new Circle(7);
const c2 = new Circle(3); // Allowed


 //const r2 = new Rectangle(2, 3); // Error: Only one Rectangle is allowed
 //const s2 = new Square(6);       // Error: Only one Square is allowed 

console.log(r.toString());
console.log(s.toString());
console.log(c.toString());
console.log(c2.toString());

console.log("Total Shapes =", Shape.getCount());
