// Polymorphism

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('duplicate Square');
};

const shapes = [new Circle(), new Square()];

for (const shape of shapes) {
  shape.duplicate();
}
