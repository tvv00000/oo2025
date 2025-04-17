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
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 10000000;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error("short circuit");
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var Resistor_1 = _a[_i];
            inverseSum += 1 / Resistor_1.getResistance();
        }
        return 1 / inverseSum;
    };
    return ParallelConnection;
}(MultipleConnection));
var p = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(330));
p.addResistor(new Resistor(440));
//console.log(p.getResistance())
var totalResistance = p.getResistance();
console.log("Total resistance:", totalResistance);
var voltage = 5;
var current = voltage / p.getResistance();
console.log(current);
var p2 = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
var totalResistance2 = p2.getResistance();
console.log("Total resistance:", totalResistance2);
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var seriesSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var Resistor_2 = _a[_i];
            seriesSum += Resistor_2.getResistance();
        }
        return seriesSum;
    };
    return SeriesConnection;
}(MultipleConnection));
var s1 = new SeriesConnection();
s1.addResistor(new Resistor(110));
s1.addResistor(new Resistor(220));
var s2 = new SeriesConnection();
s2.addResistor(new Resistor(220));
s2.addResistor(new Resistor(440));
var s3 = new SeriesConnection();
s3.addResistor(s1);
s3.addResistor(s2);
var totalResistance3 = s3.getResistance();
console.log("Total resistance of both series:", totalResistance3);
var ParallelConnection1 = new ParallelConnection();
ParallelConnection1.addResistor(new Resistor(330));
ParallelConnection1.addResistor(s3);
console.log("Total resistance of parallel+ series", ParallelConnection1.getResistance());
var circuit = [new Resistor(220), new Switch()];
for (var _i = 0, circuit_1 = circuit; _i < circuit_1.length; _i++) {
    var element = circuit_1[_i];
    console.log(element.getResistance());
}
function sumResistance(element) {
    var sum = 0;
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var r = element_1[_i];
        sum += r.getResistance();
    }
    return sum;
    console.log(sum);
}
