function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// Example with strings
const stringArray = ["apple", "banana", "cherry"];
const firstString = getFirstElement(stringArray);
console.log("First string:", firstString); // Output: "apple"

// Example with numbers
const numberArray = [10, 20, 30];
const firstNumber = getFirstElement(numberArray);
console.log("First number:", firstNumber); // Output: 10

// Example with empty array
const emptyArray: number[] = [];
const firstEmpty = getFirstElement(emptyArray);
console.log("First element in empty array:", firstEmpty); // Output: undefined
