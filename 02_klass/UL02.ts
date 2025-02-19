class Vehicle {
    private model: string;
    private speed: number;

    constructor(model: string, speed: number = 0) {
        this.model = model;
        this.speed = speed;
    }

    accelerate(amount: number): void {
        this.speed += amount;
        console.log(this.model+" kiirendas "+amount+"km/h, kiirus on "+this.speed+"km/h");
    }

    brake(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(this.model+" pidurdas "+amount+"km/h, kiirus on "+this.speed+"km/h");
    }

    getStatus(): string {
        if(this.speed == 0){
            return this.model+" ei liigu"
        }else{
            return this.model+" liigub "+this.speed+"km/h";
        }
    }
}
//Auto ja algkiirus
const car1 = new Vehicle("AUDI", 15);
const car2 = new Vehicle("BMW");
const car3 = new Vehicle("FERRARI", 50);
console.log("--------------------------------------------")
// 1
car1.accelerate(5);
car2.accelerate(15);
car3.accelerate(50);
console.log("--------------------------------------------")
//2
car1.accelerate(15);
car2.brake(30); // <0
car3.accelerate(150);
console.log("--------------------------------------------")
//Koik
console.log(car1.getStatus());
console.log(car2.getStatus());
console.log(car3.getStatus());