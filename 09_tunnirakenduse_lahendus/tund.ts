export class Water{
    waterAmount: number;
    heatingPower: number = 0;
    temperature: number;
 
    roomTemperature: number;
 
    readonly specialHeatCapacity:number=4200;
 
 
 
    constructor(waterAmount: number, temperature: number){
        this.waterAmount=waterAmount;
        this.temperature=temperature;   
    }
 
    setHeatingPower(newPower:number): void{
        this.heatingPower=newPower;
    }
 
    getTemperature(): number{
        return this.temperature;
    }
 
    heatAsecond(): void{
        let joules=this.heatingPower;
        let deltaTemperature=joules/(this.specialHeatCapacity*this.waterAmount/1000);
        this.temperature += deltaTemperature;
    }
 
}
    let w=new Water(800, 10);
    w.setHeatingPower(1500);
 


    console.log(w.getTemperature());
    
// 120 sec
for (let i = 0; i < 120; i++) {
    w.heatAsecond();
}

console.log(w.getTemperature());