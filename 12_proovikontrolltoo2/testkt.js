"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordLetterCounter = void 0;
var WordLetterCounter = /** @class */ (function () {
    function WordLetterCounter() {
    }
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
