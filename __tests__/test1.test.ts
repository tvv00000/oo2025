import { highway } from '../07_testid/highway';
import { id } from '../07_testid/id';
//import { kalkulaator } from '../07_testid/kalkulaator';

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


import { Rectangle } from '../07_testid/Rectangle';

describe('Rectangle', () => {
  test('calculate area', () => {
    const rect = new Rectangle(10, 5);
    expect(rect.getArea()).toBe(50);
  });

  test('calculate perimeter', () => {
    const rect = new Rectangle(10, 5);
    expect(rect.getPerimeter()).toBe(30);
  });
});




import { WordLetterCounter } from '../12_proovikontrolltoo2/testkt';

describe('Sona', () => {
    let counter: WordLetterCounter;

    beforeEach(() => {
        counter = new WordLetterCounter();
    });

    test('e', () => {
        expect(counter.counter('e', 'Pere')).toBe(2);
    });

    test('E', () => {
        expect(counter.counter('E', 'Pere')).toBe(0);
    });

    test('empty ""', () => {
      expect(counter.counter('', 'Pere')).toBe(0);
    });

    test('space " "', () => {
      expect(counter.counter(' ', 'Pere ')).toBe(1);
    });
});


describe('lause', () => {
  //add
})