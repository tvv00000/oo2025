function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
// Example with strings
var stringArray = ["apple", "banana", "cherry"];
var firstString = getFirstElement(stringArray);
console.log("First string:", firstString); // Output: "apple"
// Example with numbers
var numberArray = [10, 20, 30];
var firstNumber = getFirstElement(numberArray);
console.log("First number:", firstNumber); // Output: 10
// Example with empty array
var emptyArray = [];
var firstEmpty = getFirstElement(emptyArray);
console.log("First element in empty array:", firstEmpty); // Output: undefined
