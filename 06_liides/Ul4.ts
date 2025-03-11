interface Loom {
    nimi: string;
    vanus: number;
    heli(): void;
    varv(): void;
    vanusFunc(): void;
}

class Koer implements Loom {
    nimi: string;
    vanus: number;

    constructor(nimi: string, vanus: number) {
        this.nimi = nimi;
        this.vanus = vanus;
    }

    heli(): void {
        console.log(this.nimi, "utleb tere");
    }

    varv(): void {
        console.log(this.nimi, "on kollane");
    }

    vanusFunc(): void {
        console.log(this.nimi, "on", this.vanus, "aastane")
    }
}

class Kass implements Loom {
    nimi: string;
    vanus: number;

    constructor(nimi: string, vanus: number) {
        this.nimi = nimi;
        this.vanus = vanus;
    }

    heli(): void {
        console.log(this.nimi, "utleb oih");
    }

    varv(): void {
        console.log(this.nimi, "on valge");
    }

    vanusFunc(): void {
        console.log(this.nimi, "on", this.vanus, "aastane")
    }
}

// 1
let koer1: Loom = new Koer("Max", 5);
koer1.heli();
koer1.varv();
koer1.vanusFunc();

// 2
let kass1: Loom = new Kass("Daisy", 3);
kass1.heli();
kass1.varv();
kass1.vanusFunc();
