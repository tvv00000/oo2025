"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log("kuva");
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vektor.prototype.liida = function (teine) {
        return new Vektor(this.x + teine.x, this.y + teine.y);
    };
    Vektor.prototype.korda = function (teine) {
        return new Vektor(this.x * teine.x, this.y * teine.y);
    };
    Vektor.prototype.skalaar = function () {
        console.log(this.x * 2, this.y * 2);
    };
    return Vektor;
}());
var vektorid = [
    new Vektor(1, 3),
    new Vektor(2, 3),
    new Vektor(3, 1),
    new Vektor(3, 2),
];
console.log(vektorid);
var v1 = new Vektor(1, 1);
v1.kuva();
console.log("pikkus");
console.log(v1.pikkus());
console.log("");
var v3 = v1.liida(new Vektor(3, 6));
console.log("liida");
v3.kuva();
console.log("pikkus");
console.log(v3.pikkus());
console.log("");
var v4 = v1.korda(new Vektor(2, 4));
console.log("korda");
v4.kuva();
console.log("pikkus");
console.log(v4.pikkus());
console.log("");
var v5 = new Vektor(3, 5);
console.log("skalaar");
v5.kuva();
v5.skalaar();
