/*

geomeetriline keskmine

*koosta funkstioon, mis korrutab parameetritena antud kaks arvu ning votab neist ruutjuure (Math.sqrt). katseta

*arve voib olla rohkem, need antakse ette kogumina. arvud korrutatake kokku ning voetakse niimitmes juur(astendaja poordvaartus, matchMedia.pow), kuimitu arvu onli

*loo klass, milles on meeles inimese palk esimesel tooaastal. kasuga saab lisada iga aasta kohta palga muutuse koefitsiendi.
naiteks 0.95 tahendab palga 5% langust. valja saab kusida kasutaja palga igal aastal.
samuti kusida palgad nonda, et nende aastane koefitsient on igal korral vordne eelmises punktis arvutatud geomeetrilise keskmise jagu.

palk1aasta
palgChange
palkIgaAasta

aastane koef = eelmine geomeetriline keskmine jagu


*/

//1
function esimeneUl(arv1:number, arv2:number):number{
    let vastus1:number = Math.sqrt(arv1 * arv2);

    return vastus1;
}

//console.log(esimeneUl(3, 3))

//2
function teineUl(arvud: number[]): number {
    let korrutis: number = 1;
    for (let i = 0; i < arvud.length; i++) {
        korrutis *= arvud[i];
    }

    let n: number = arvud.length;
    let vastus2: number = Math.pow(korrutis, n);

    return vastus2;
}

//console.log(teineUl([1,7]))
//console.log(teineUl([1,1,1,1,1,1,1,1,1,2]))

//3
class kolmasUl{
    private palk: number;

    constructor(palk: number) {
        this.palk = palk;
    }

    aastad(muutus: number[]): void{
        let palkKokku:number = this.palk;
        console.log("Aasta ", 0, palkKokku);

        for (let i = 0; i < muutus.length; i++) {
            palkKokku *= muutus[i];
            console.log("Aasta ", i+1, palkKokku);
        }
        console.log("------------------");
    }

    mdea(muutus: number[]):void{
        let palkKokku:number = this.palk;
        console.log("Aasta ", 0, palkKokku);
        let koefitsiendiKeskmine:number = 1;

        for (let i = 0; i < muutus.length; i++) {
            koefitsiendiKeskmine *= muutus[i];
            console.log(koefitsiendiKeskmine);
        }

        koefitsiendiKeskmine = Math.sqrt(koefitsiendiKeskmine);
        console.log(koefitsiendiKeskmine);

        for (let i = 0; i < muutus.length-1; i++) {
            palkKokku *= koefitsiendiKeskmine;
            console.log(palkKokku);
        }
    }
}

let palk1 = new kolmasUl(1000);
let palk2 = new kolmasUl(2000);

palk1.aastad([1.5, 2, 0.5]);
palk1.mdea([1.5, 2, 0.5]);

/*

1.5, 2, 0.5 = 1.5
Math.sqrt(1.5) = 1.22...
1000 * 1.22... (3 korda)
*/