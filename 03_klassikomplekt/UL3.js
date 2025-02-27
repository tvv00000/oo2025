var Book = /** @class */ (function () {
    function Book(id, nimetus) {
        this.id = id;
        this.nimetus = nimetus;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.findBook = function (id) {
        return this.books.find(function (b) { return b.id === id; });
    };
    return Library;
}());
var book1 = new Book(1, "Õpik: Tere Pere");
var book2 = new Book(2, "Õpik: Test");
var book3 = new Book(3, "Õpik: Parim");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
var books = library.getBooks();
console.log("Kõik raamatud:", books);
var foundBook1 = library.findBook(1);
console.log("Leitud raamat:", foundBook1);
var foundBook2 = library.findBook(4);
console.log("Leitud raamat:", foundBook2);
