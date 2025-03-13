interface food {
    name: string;
    price: number;
    costToMake: number;
    totalSales: number;
    profit(): object;
}

class calcAll implements food{
    name: string;
    price: number;
    costToMake: number;
    totalSales: number;
    profitPU: number;
    
    constructor(name: string, price: number, costToMake: number, totalSales: number){
        this.name = name;
        this.price = price;
        this.costToMake = costToMake;
        this.totalSales = totalSales;
        this.profitPU = 0;
    }

    profit(): object {
        this.profitPU = this.price-this.costToMake;

        return{
            "Name": this.name,
            "Price": this.price,
            "Cost to Make": this.costToMake,
            "Profit Per Unit": this.profitPU,
            "Total Sales": this.totalSales,
            "Total Profit": parseFloat((this.profitPU * this.totalSales).toFixed(2))
        };
    }
}

let foodData: object[] = [];

let food01: food = new calcAll("Pasta", 5.55, 1.15, 10);
foodData.push(food01.profit());

let food02: food = new calcAll("Wrap", 6, 3, 15);
foodData.push(food02.profit());

let food03: food = new calcAll("Salad", 4, 0.80, 7);
foodData.push(food03.profit());

console.table(foodData);

const totalTotalProfit = foodData.reduce((total, foodElement) => {
    const totalProfit = parseFloat(foodElement["Total Profit"]);
    return total + totalProfit;
}, 0);

const totalTotalSales = foodData.reduce((total, foodElement) => {
    const totalSales = foodElement["Total Sales"];
    return total + totalSales;
}, 0);

console.log("Total Total Profit", totalTotalProfit.toFixed(2));
console.log("Total Total Sales", totalTotalSales);