var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Baas
var Relv = /** @class */ (function () {
    function Relv(nimi, kahju) {
        this.nimi = nimi;
        this.kahju = kahju;
    }
    return Relv;
}());
// Pulk
var Relv1 = /** @class */ (function (_super) {
    __extends(Relv1, _super);
    function Relv1() {
        return _super.call(this, "Pulk", 10) || this;
    }
    Relv1.prototype.kasuta = function () {
        console.log("Kasutatakse relva " + this.nimi + ", tekitades " + this.kahju + " kahju!");
    };
    return Relv1;
}(Relv));
// Padi
var Relv2 = /** @class */ (function (_super) {
    __extends(Relv2, _super);
    function Relv2() {
        return _super.call(this, "Padi", 2) || this;
    }
    Relv2.prototype.kasuta = function () {
        console.log("Kasutatakse relva " + this.nimi + ", tekitades " + this.kahju + " kahju!");
    };
    return Relv2;
}(Relv));
//Püstol
var Relv3 = /** @class */ (function (_super) {
    __extends(Relv3, _super);
    function Relv3() {
        return _super.call(this, "Püstol", 65) || this;
    }
    Relv3.prototype.kasuta = function () {
        console.log("Kasutatakse relva " + this.nimi + ", tekitades " + this.kahju + " kahju!");
    };
    return Relv3;
}(Relv));
var tegelased = [
    { nimi: "Thor", elu: 100, relv: new Relv1() }, // Pulk
    { nimi: "Captain America", elu: 80, relv: new Relv2() }, // Padi
    { nimi: "Hulk", elu: 120, relv: new Relv3() } //Püstol
];
console.table(tegelased);
tegelased.forEach(function (tegelane) {
    console.log(tegelane.nimi + " kasutab oma relva:");
    tegelane.relv.kasuta();
});
