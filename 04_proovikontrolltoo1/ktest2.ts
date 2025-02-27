class mata{
    private numbers: number[];
    
    constructor(numbers: number[]) {
        this.numbers = numbers;
    }

    aritkesk(){
        console.log("aritkesk");
        let sum = 0;
        let aritkeskv = 0;
        for (let i = 0; i < this.numbers.length; i++) {
          sum += this.numbers[i];
        }

        aritkeskv = sum/this.numbers.length
        console.log(aritkeskv);
    }

    libisev(){
        console.log("libisev");
        let num1 = 0;
        for (let i=0; i < this.numbers.length-2; i++){
            num1 = ((this.numbers[i] + this.numbers[i+1] + this.numbers[i+2]) / 3);
            console.log(num1);
        }
    }

    add(newNumber: number){
        console.log("uus", newNumber);
        this.numbers.push(newNumber);
        this.aritkesk();
        this.libisev();
    }
}

let ak1 = new mata([5, 10, 15, 20]);

ak1.aritkesk();

ak1.libisev();

ak1.add(25);