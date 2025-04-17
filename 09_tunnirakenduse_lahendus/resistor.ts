
abstract class AbstractResistor {
    abstract getResistance(): number;
    
    getCurrent(u: number) {
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor {
    r: number = 0;

    constructor(r: number) {
        super();
        this.r = r;
    }

    getResistance(): number {
        return this.r;
    }
}

class Switch extends AbstractResistor {
    private on: boolean = false;
    setOn(state: boolean) {
        this.on = state;
        
    }

    getResistance(): number {
        return this.on ? 0: 10000000;
    }
    getCurrent(u: number): number {
        if(u>0 && this.on){
            throw new Error("short circuit");
        }
        return super.getCurrent(u);
    }
}

abstract class MultipleConnection extends AbstractResistor{
    resistors: AbstractResistor[] = [];

    addResistor(r: AbstractResistor) {
        this.resistors.push(r);
    }
}

class ParallelConnection extends MultipleConnection {
    getResistance(): number {
        let inverseSum: number = 0;

        for(let Resistor of this.resistors) {
            inverseSum += 1/Resistor.getResistance();
        }
        return 1/inverseSum;
        
    }
}

let p:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(330));
p.addResistor(new Resistor(440));
//console.log(p.getResistance())

let totalResistance = p.getResistance();
console.log("Total resistance:", totalResistance);

let voltage=5;
let current=voltage/p.getResistance();
console.log(current);

let p2:ParallelConnection = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
let totalResistance2 = p2.getResistance();
console.log("Total resistance:", totalResistance2);

class SeriesConnection extends MultipleConnection {
    getResistance(): number {
        let seriesSum: number = 0;
        for (let Resistor of this.resistors) {
            seriesSum += Resistor.getResistance();
        }

        return seriesSum;
    }
}

let s1:SeriesConnection = new SeriesConnection();
s1.addResistor(new Resistor(110));
s1.addResistor(new Resistor(220));
let s2:SeriesConnection = new SeriesConnection();
s2.addResistor(new Resistor(220));
s2.addResistor(new Resistor(440));

let s3:SeriesConnection = new SeriesConnection();
s3.addResistor(s1);
s3.addResistor(s2);

let totalResistance3 = s3.getResistance();
console.log("Total resistance of both series:", totalResistance3);

let ParallelConnection1: ParallelConnection = new ParallelConnection();
ParallelConnection1.addResistor(new Resistor(330));
ParallelConnection1.addResistor(s3);
console.log("Total resistance of parallel+ series", ParallelConnection1.getResistance());


let circuit: AbstractResistor[] = [new Resistor(220), new Switch()];

for(let element of circuit){
    console.log(element.getResistance())
}

function sumResistance(element: AbstractResistor[]): number {
    let sum = 0;
    for(let r of element) {
        sum += r.getResistance();
    }
    return sum;
    console.log(sum);
}
