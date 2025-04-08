// Baas
abstract class Relv {
    constructor(public nimi: string, public kahju: number) {}

    abstract kasuta(): void;
}

// Pulk
class Relv1 extends Relv {
    constructor() {
        super("Pulk", 10);
    }

    kasuta(): void {
        console.log("Kasutatakse relva " + this.nimi + ", tekitades " + this.kahju + " kahju.");
    }
}

// Padi
class Relv2 extends Relv {
    constructor() {
        super("Padi", 2);
    }

    kasuta(): void {
        console.log("Kasutatakse relva " + this.nimi + ", tekitades " + this.kahju + " kahju. Keerutab õhus!");
    }
}

//Püstol
class Relv3 extends Relv {
    constructor() {
        super("Püstol", 65);
    }

    kasuta(): void {
        console.log("Kasutatakse relva " + this.nimi + ", tekitades " + this.kahju + " kahju. Keerutab õhus!");
    }
}


const tegelased: any[] = [
    { nimi: "Thor", elu: 100, relv: new Relv1() }, // Pulk
    { nimi: "Captain America", elu: 80, relv: new Relv2() }, // Padi
    { nimi: "Hulk", elu: 120, relv: new Relv3() } //Püstol
];


console.table(tegelased);