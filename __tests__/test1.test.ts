import { highway } from '../07_testid/highway';
import { id } from '../07_testid/id';
import { add, subtract, multiply, divide } from '../07_testid/calculator';

function sum(a: number, b: number): number {
    return a + b;
  }

describe('first tests', () => {
  test('adding func check', () => {
    expect(sum(5, 2)).toBe(7);
  });

  test('should !fail check', () => {
    expect(5+5).toBe(10);
  });
})

describe('highway check', () => {
  test('highway check', () => {
    expect(highway(50, 10, 1, 1)).toBe(55);
  });
})

describe('id check', () => {
  test('id check', () => {
    expect(id(50204212741)).toStrictEqual(["male", "02", "04","21", "274", "1"]);
  });
})

test("BasicCalculator test", () => { const calc = new BasicCalculator(); expect(calc.add(2, 3)).toBe(5); expect(calc.subtract(5, 3)).toBe(2); expect(calc.multiply(2, 3)).toBe(6); expect(calc.divide(6, 2)).toBe(3); expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero"); });