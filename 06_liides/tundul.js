var calcAll = /** @class */ (function () {
    function calcAll(name, price, costToMake, totalSales) {
        this.name = name;
        this.price = price;
        this.costToMake = costToMake;
        this.totalSales = totalSales;
        this.profitPU = 0;
    }
    calcAll.prototype.profit = function () {
        this.profitPU = this.price - this.costToMake;
        return {
            "Name": this.name,
            "Price": this.price,
            "Cost to Make": this.costToMake,
            "Profit Per Unit": this.profitPU,
            "Total Sales": this.totalSales,
            "Total Profit": parseFloat((this.profitPU * this.totalSales).toFixed(2))
        };
    };
    return calcAll;
}());
var foodData = [];
var food01 = new calcAll("Pasta", 5.55, 1.15, 10);
foodData.push(food01.profit());
var food02 = new calcAll("Wrap", 6, 3, 15);
foodData.push(food02.profit());
var food03 = new calcAll("Salad", 4, 0.80, 7);
foodData.push(food03.profit());
console.table(foodData);
var totalTotalProfit = foodData.reduce(function (total, foodElement) {
    var totalProfit = parseFloat(foodElement["Total Profit"]);
    return total + totalProfit;
}, 0);
var totalTotalSales = foodData.reduce(function (total, foodElement) {
    var totalSales = foodElement["Total Sales"];
    return total + totalSales;
}, 0);
console.log("Total Total Profit", totalTotalProfit.toFixed(2));
console.log("Total Total Sales", totalTotalSales);
