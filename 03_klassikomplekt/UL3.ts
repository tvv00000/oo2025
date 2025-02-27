class Book {
    constructor(public id: number, public nimetus: string) {}
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

const book1 = new Book(1, "Õpik: Tere Pere");
const book2 = new Book(2, "Õpik: Test");
const book3 = new Book(3, "Õpik: Parim");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const books = library.getBooks();
console.log("Kõik raamatud:", books);

const foundBook1 = library.findBook(1);
console.log("Leitud raamat:", foundBook1);
const foundBook2 = library.findBook(4);
console.log("Leitud raamat:", foundBook2);
