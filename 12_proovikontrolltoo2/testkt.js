"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordLetterCounter = void 0;
var WordLetterCounter = /** @class */ (function () {
    function WordLetterCounter() {
    }
    WordLetterCounter.prototype.sentence2Word = function (sentence, letter) {
        // Trim any leading/trailing spaces from the sentence and split into words
        var words = sentence.trim().split(/\s+/); // This regex handles multiple spaces between words
        var counts = [];
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            var count_1 = word.split(letter).length - 1;
            counts.push(count_1);
        }
        return counts;
    };
    WordLetterCounter.prototype.counter = function (letter, word) {
        var count = 0;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (char === letter) {
                count++;
            }
        }
        return count;
    };
    return WordLetterCounter;
}());
exports.WordLetterCounter = WordLetterCounter;
var wordCounter = new WordLetterCounter();
// Example 1: Counting occurrences of 'i' in each word
var words = wordCounter.sentence2Word("This is a simple test sentence   ", 'i');
console.log(words); // Expected output: [1, 1, 0, 1, 0]
// Example 2: Counting occurrences of space ' ' in a sentence
var count = wordCounter.counter(" ", "This is a simple test sentence    ");
console.log(count); // Expected output: 5 (spaces between words and trailing spaces)
