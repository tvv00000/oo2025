import { highway } from '../07_testid/highway';
import { id } from '../07_testid/id';
import { add, subtract, multiply, divide } from '../07_testid/calc';

function sum(a: number, b: number): number {
    return a + b;
  }


  test('adding func check', () => {
    expect(sum(5, 2)).toBe(7);
  });

  test('should !fail check', () => {
    expect(5+5).toBe(10);
  });

  test('highway check', () => {
    expect(highway(50, 10, 1, 1)).toBe(55);
  });

  test('id check', () => {
    expect(id(50204212741)).toStrictEqual(["male", "02", "04","21", "274", "1"]);
  });

  describe('Calculator Tests', () => {

    test('Addition works correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-2, 3)).toBe(1);
      expect(add(0, 0)).toBe(0);
    });
  
    test('Subtraction works correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(2, 3)).toBe(-1);
      expect(subtract(0, 0)).toBe(0);
    });
  
    test('Multiplication works correctly', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(0, 5)).toBe(0);
    });
  
    test('Division works correctly', () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(-6, 3)).toBe(-2);
      expect(divide(5, 2)).toBe(2.5);
      expect(divide(5, 2)).toBe(2.5);
    });
  
    test('Division by zero throws error', () => {
      expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
  
  });