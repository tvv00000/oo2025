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
function esimeneUl(arv1, arv2) {
    var vastus1 = Math.sqrt(arv1 * arv2);
    return vastus1;
}
//console.log(esimeneUl(3, 3))
//2
function teineUl(arvud) {
    var korrutis = 1;
    for (var i = 0; i < arvud.length; i++) {
        korrutis *= arvud[i];
    }
    var n = arvud.length;
    var vastus2 = Math.pow(korrutis, n);
    return vastus2;
}
//console.log(teineUl([1,7]))
//console.log(teineUl([1,1,1,1,1,1,1,1,1,2]))
//3
var kolmasUl = /** @class */ (function () {
    function kolmasUl(palk) {
        this.palk = palk;
    }
    kolmasUl.prototype.aastad = function (muutus) {
        var palkKokku = this.palk;
        console.log("Aasta ", 0, palkKokku);
        for (var i = 0; i < muutus.length; i++) {
            palkKokku *= muutus[i];
            console.log("Aasta ", i + 1, palkKokku);
        }
        console.log("------------------");
    };
    kolmasUl.prototype.mdea = function (muutus) {
        var palkKokku = this.palk;
        var koefitsiendiKeskmine = 1;
        for (var i = 0; i < muutus.length; i++) {
            koefitsiendiKeskmine *= muutus[i];
        }
        koefitsiendiKeskmine = Math.sqrt(koefitsiendiKeskmine);
        console.log(koefitsiendiKeskmine);
        for (var i = 0; i < muutus.length - 1; i++) {
            palkKokku *= koefitsiendiKeskmine;
            console.log(palkKokku);
        }
    };
    return kolmasUl;
}());
var palk1 = new kolmasUl(1000);
var palk2 = new kolmasUl(2000);
palk1.aastad([1.5, 2, 0.5]);
palk1.mdea([1.5, 2, 0.5]);
