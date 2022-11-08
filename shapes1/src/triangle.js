export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side2 + this.side1))) {
    return "Not a triange";
  }else if ((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !==this.side3)){
    return "Scalene triangle";
  }else if ((this.side1 === this.side2) && (this.side1 === this.side3)){
    return "Equilateral triangle";
  }else {
    return "Isosceles triangle"
  }
};