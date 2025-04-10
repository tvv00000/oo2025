"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Water = void 0;
var Water = /** @class */ (function () {
    function Water(waterAmount, temperature) {
        this.heatingPower = 0;
        this.specialHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Water.prototype.setHeatingPower = function (newPower) {
        this.heatingPower = newPower;
    };
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    Water.prototype.heatAsecond = function () {
        var joules = this.heatingPower;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    };
    return Water;
}());
exports.Water = Water;
var w = new Water(800, 10);
w.setHeatingPower(1500);
console.log(w.getTemperature());
// 120 sec
for (var i = 0; i < 120; i++) {
    w.heatAsecond();
}
console.log(w.getTemperature());
