import { start } from "repl";

function sum(a: number, b: number): number {
    return a + b;
  }

function highway(startSpeed: number, changeSpeed: number, time1: number, time2: number): number{
  let totalTime: number = 0;
  totalTime = startSpeed * time1;
  totalTime += startSpeed+changeSpeed * time2;

  return totalTime/(time1+time2);
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