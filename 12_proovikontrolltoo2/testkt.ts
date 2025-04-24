export interface letterCounter {
    sentence2Word(sentence: string, letter: string): number[];  // It should return a number[] not string[]
    counter(letter: string, word: string): number;
}

export class WordLetterCounter implements letterCounter {
    sentence2Word(sentence: string, letter: string): number[] {
        // Trim any leading/trailing spaces from the sentence and split into words
        const words: string[] = sentence.trim().split(/\s+/); // This regex handles multiple spaces between words
        const counts: number[] = [];

        for (const word of words) {
            const count = word.split(letter).length - 1;
            counts.push(count);
        }

        return counts;
    }

    counter(letter: string, word: string): number {
        let count = 0;

        for (const char of word) {
            if (char === letter) {
                count++;
            }
        }
        return count;
    }
}

const wordCounter = new WordLetterCounter();

// Example 1: Counting occurrences of 'i' in each word
const words = wordCounter.sentence2Word("This is a simple test sentence   ", 'i');
console.log(words);  // Expected output: [1, 1, 0, 1, 0]

// Example 2: Counting occurrences of space ' ' in a sentence
const count = wordCounter.counter(" ", "This is a simple test sentence    ");
console.log(count);  // Expected output: 5 (spaces between words and trailing spaces)
