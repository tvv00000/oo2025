export interface Shape {
    getArea(): number;
    getPerimeter(): number;
  }
  
  export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  


const rectangle1 = new Rectangle(10, 5);
console.log('10x5:');
console.log('Area:', rectangle1.getArea()); // 50
console.log('Perimeter:', rectangle1.getPerimeter()); // 30

const rectangle2 = new Rectangle(7, 3);
console.log('7x3:');
console.log('Area:', rectangle2.getArea()); // 21
console.log('Perimeter:', rectangle2.getPerimeter()); // 20