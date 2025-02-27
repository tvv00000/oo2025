class Book {
    constructor(public id: number, public nimi: string) {}
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getBooks(): Book[] {
        return this.books;
    }

    findBook(id: number): Book | undefined {
        return this.books.find(b => b.id === id);
    }
}

const book1 = new Book(1, "Tere Pere");
const book2 = new Book(2, "Test");
const book3 = new Book(3, "Parim");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const books = library.getBooks();
console.log("Koik raamatud:", books);

const find1 = library.findBook(1);
console.log("Leitud raamat:", find1);
const find2 = library.findBook(4);
console.log("Leitud raamat:", find2);
