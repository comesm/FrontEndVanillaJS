class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }


  get area() {
    console.log(9, this);
    return this.calcArea();
  }

  static heightCalc(a,b) {
    return a * b;
  }

  calcArea() {
    return this.height * this.width;
  }

}

const sq = new Rectangle(10, 10);

console.log(sq.area);

console.log(Rectangle.heightCalc(4,5));

//

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

const l = new Lion('John');
l.speak();

