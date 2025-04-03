"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var rectangle1 = new Rectangle(10, 5);
console.log('10x5:');
console.log('Area:', rectangle1.getArea()); // 50
console.log('Perimeter:', rectangle1.getPerimeter()); // 30
var rectangle2 = new Rectangle(7, 3);
console.log('7x3:');
console.log('Area:', rectangle2.getArea()); // 21
console.log('Perimeter:', rectangle2.getPerimeter()); // 20
