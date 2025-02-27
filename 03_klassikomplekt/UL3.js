var Book = /** @class */ (function () {
    function Book(id, nimi) {
        this.id = id;
        this.nimi = nimi;
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
var book1 = new Book(1, "Tere Pere");
var book2 = new Book(2, "Test");
var book3 = new Book(3, "Parim");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
var books = library.getBooks();
console.log("Koik raamatud:", books);
var find1 = library.findBook(1);
console.log("Leitud raamat:", find1);
var find2 = library.findBook(4);
console.log("Leitud raamat:", find2);
