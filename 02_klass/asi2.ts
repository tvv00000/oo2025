import { Console } from "console";
import { verify } from "crypto";

class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log("kuva");
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
    korda(teine:Vektor):Vektor{
        return new Vektor(this.x*teine.x, this.y*teine.y);
    }
    skalaar():void{
        console.log(this.x*2, this.y*2);
    }
}

let vektorid:Vektor[]=[
    new Vektor(1, 3),
    new Vektor(2, 3),
    new Vektor(3, 1),
    new Vektor(3, 2),
];
console.log(vektorid);

let v1:Vektor=new Vektor(1, 1);
v1.kuva();
console.log("pikkus");
console.log(v1.pikkus());
console.log("");

let v3:Vektor=v1.liida(new Vektor(3, 6));
console.log("liida");
v3.kuva();
console.log("pikkus");
console.log(v3.pikkus());
console.log("");

let v4:Vektor=v1.korda(new Vektor(2, 4));
console.log("korda");
v4.kuva();
console.log("pikkus");
console.log(v4.pikkus());
console.log("");

let v5:Vektor=new Vektor(3, 5);
console.log("skalaar");
v5.kuva();
v5.skalaar();