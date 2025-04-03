// 1. Liides (Interface) export interface Shape { getArea(): number; getPerimeter(): number; }

// 2. Realiseeriv klass (Ristkülik) export class Rectangle implements Shape { constructor(private width: number, private height: number) {}

getArea(): number {
    return this.width * this.height;
}

getPerimeter(): number {
    return 2 * (this.width + this.height);
}

}

// 3. Testid (Jest) // Installi Jest: npm install --save-dev jest @types/jest ts-jest

test("Rectangle test", () => { const rect = new Rectangle(10, 5); expect(rect.getArea()).toBe(50); expect(rect.getPerimeter()).toBe(30); });

// 4. Näitprogramm (index.ts) const rectangle = new Rectangle(10, 5); console.log("Area:", rectangle.getArea()); console.log("Perimeter:", rectangle.getPerimeter());

