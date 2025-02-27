/*

 Kuva tekkinud kujund ekraanile.

 Võimalda küsida punktide uued asukohad ning külgede pikkused, näita kujundit ekraanil.

*/



class Kolmnurk {

    private xCoords: number[];
    private yCoords: number[];

    constructor(xCoords: number[], yCoords: number[]) {
        this.xCoords = xCoords;
        this.yCoords = yCoords;
    }

    naitaKolmnurk(): void {
        console.log("Kolmnurga koordinaadid on ");
        for (let i = 0; i < this.xCoords.length; i++) {
            console.log([i+1]+" Punkt: ", this.xCoords[i]+", "+this.yCoords[i]);
        }
    }

    lisaPunkt(x: number, y: number): void {
        console.log("Listati punkt")
        this.xCoords.push(x);
        this.yCoords.push(y);
        this.naitaKolmnurk();
        this.arvutaUmermoot();
    }

    arvutaUmermoot(): number {
        let perimeter = 0;
        let n = this.xCoords.length;
        for (let i = 0; i < n; i++) {
            let next = (i + 1) % n; // kui 2+1%n ss 0
            let x = this.xCoords[next] - this.xCoords[i];
            let y = this.yCoords[next] - this.yCoords[i];
            perimeter += (Math.sqrt(x * x + y * y));
        }
        console.log("Kolmnurga ümbermõõt:", perimeter, "uhikut");
        return perimeter;
    }

    move(x: number, y: number): void {
        for (let i = 0; i < this.xCoords.length; i++) {
            this.xCoords[i] += x;
            this.yCoords[i] += y;
        }
        console.log("Kolmnurk on liigutatud", x,",", y);
        this.naitaKolmnurk();
    }

    resize(palju: number): void {
        for (let i = 0; i < this.xCoords.length; i++) {
            this.xCoords[i] = this.xCoords[i] * palju;
            this.yCoords[i] = this.yCoords[i] * palju;
        }

        console.log("Kolmnurk on resized", palju);
        this.naitaKolmnurk();
        this.arvutaUmermoot();
    }
}


let kolmnurk1 = new Kolmnurk([0, 1, 2], [0, 1, 2]);
let kolmnurk2 = new Kolmnurk([5, 6, 7], [7, 6, 5]);


kolmnurk1.naitaKolmnurk();

kolmnurk1.lisaPunkt(3, 3);

kolmnurk2.move(2, 2);


kolmnurk1.naitaKolmnurk();
kolmnurk1.resize(2);
