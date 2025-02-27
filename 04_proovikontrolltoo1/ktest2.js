var mata = /** @class */ (function () {
    function mata(numbers) {
        this.numbers = numbers;
    }
    mata.prototype.aritkesk = function () {
        console.log("aritkesk");
        var sum = 0;
        var aritkeskv = 0;
        for (var i = 0; i < this.numbers.length; i++) {
            sum += this.numbers[i];
        }
        aritkeskv = sum / this.numbers.length;
        console.log(aritkeskv);
    };
    mata.prototype.libisev = function () {
        console.log("libisev");
        var num1 = 0;
        for (var i = 0; i < this.numbers.length - 2; i++) {
            num1 = ((this.numbers[i] + this.numbers[i + 1] + this.numbers[i + 2]) / 3);
            console.log(num1);
        }
    };
    mata.prototype.add = function (newNumber) {
        console.log("uus", newNumber);
        this.numbers.push(newNumber);
        this.aritkesk();
        this.libisev();
    };
    return mata;
}());
var ak1 = new mata([5, 10, 15, 20]);
ak1.aritkesk();
ak1.libisev();
ak1.add(25);
