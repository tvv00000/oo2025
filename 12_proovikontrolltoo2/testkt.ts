export interface letterCounter {
    counter(letter: string, word: string): number;
}

export class WordLetterCounter implements letterCounter {
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
