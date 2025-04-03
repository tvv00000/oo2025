export interface Calculator { add(a: number, b: number): number; subtract(a: number, b: number): number; multiply(a: number, b: number): number; divide(a: number, b: number): number; }

export class BasicCalculator implements Calculator { add(a: number, b: number): number { return a + b; }

subtract(a: number, b: number): number {
    return a - b;
}

multiply(a: number, b: number): number {
    return a * b;
}

divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

}

const calculator = new BasicCalculator(); console.log("Addition:", calculator.add(10, 5)); console.log("Subtraction:", calculator.subtract(10, 5)); console.log("Multiplication:", calculator.multiply(10, 5)); console.log("Division:", calculator.divide(10, 5));

