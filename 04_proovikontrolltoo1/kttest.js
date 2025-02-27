/*

 Kuva tekkinud kujund ekraanile.

 Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.

*/
var Kolmnurk = /** @class */ (function () {
    function Kolmnurk(xCoords, yCoords) {
        this.xCoords = xCoords;
        this.yCoords = yCoords;
    }
    Kolmnurk.prototype.naitaKolmnurk = function () {
        console.log("Kolmnurga koordinaadid on ");
        for (var i = 0; i < this.xCoords.length; i++) {
            console.log([i + 1] + " Punkt: ", this.xCoords[i] + ", " + this.yCoords[i]);
        }
    };
    Kolmnurk.prototype.lisaPunkt = function (x, y) {
        console.log("Listati punkt");
        this.xCoords.push(x);
        this.yCoords.push(y);
        this.naitaKolmnurk();
        this.arvutaUmermoot();
    };
    Kolmnurk.prototype.arvutaUmermoot = function () {
        var perimeter = 0;
        var n = this.xCoords.length;
        for (var i = 0; i < n; i++) {
            var next = (i + 1) % n; // kui 2+1%n ss 0
            var x = this.xCoords[next] - this.xCoords[i];
            var y = this.yCoords[next] - this.yCoords[i];
            perimeter += (Math.sqrt(x * x + y * y));
        }
        console.log("Kolmnurga ümbermõõt:", perimeter, "uhikut");
        return perimeter;
    };
    Kolmnurk.prototype.move = function (x, y) {
        for (var i = 0; i < this.xCoords.length; i++) {
            this.xCoords[i] += x;
            this.yCoords[i] += y;
        }
        console.log("Kolmnurk on liigutatud", x, ",", y);
        this.naitaKolmnurk();
    };
    Kolmnurk.prototype.resize = function (palju) {
        for (var i = 0; i < this.xCoords.length; i++) {
            this.xCoords[i] = this.xCoords[i] * palju;
            this.yCoords[i] = this.yCoords[i] * palju;
        }
        console.log("Kolmnurk on resized", palju);
        this.naitaKolmnurk();
        this.arvutaUmermoot();
    };
    return Kolmnurk;
}());
var kolmnurk1 = new Kolmnurk([0, 1, 2], [0, 1, 2]);
var kolmnurk2 = new Kolmnurk([5, 6, 7], [7, 6, 5]);
kolmnurk1.naitaKolmnurk();
kolmnurk1.lisaPunkt(3, 3);
kolmnurk2.move(2, 2);
kolmnurk1.naitaKolmnurk();
kolmnurk1.resize(2);
