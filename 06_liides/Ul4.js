var Koer = /** @class */ (function () {
    function Koer(nimi, vanus) {
        this.nimi = nimi;
        this.vanus = vanus;
    }
    Koer.prototype.heli = function () {
        console.log(this.nimi, "utleb tere");
    };
    Koer.prototype.varv = function () {
        console.log(this.nimi, "on kollane");
    };
    Koer.prototype.vanusFunc = function () {
        console.log(this.nimi, "on", this.vanus, "aastane");
    };
    return Koer;
}());
var Kass = /** @class */ (function () {
    function Kass(nimi, vanus) {
        this.nimi = nimi;
        this.vanus = vanus;
    }
    Kass.prototype.heli = function () {
        console.log(this.nimi, "utleb oih");
    };
    Kass.prototype.varv = function () {
        console.log(this.nimi, "on valge");
    };
    Kass.prototype.vanusFunc = function () {
        console.log(this.nimi, "on", this.vanus, "aastane");
    };
    return Kass;
}());
// 1
var koer1 = new Koer("Max", 5);
koer1.heli();
koer1.varv();
koer1.vanusFunc();
// 2
var kass1 = new Kass("Daisy", 3);
kass1.heli();
kass1.varv();
kass1.vanusFunc();
