class Eksemplar {
    constructor(
        public id: number,
        public nimetus: string,
        public autor: string,
        public laenutatud: boolean = false
    ) {}

    laenuta(): void {
        if (!this.laenutatud) {
            this.laenutatud = true;
            console.log(`Eksemplar "${this.nimetus}" on nüüd laenutatud.`);
        } else {
            console.log(`Eksemplar "${this.nimetus}" on juba laenutatud.`);
        }
    }

    tagasta(): void {
        if (this.laenutatud) {
            this.laenutatud = false;
            console.log(`Eksemplar "${this.nimetus}" on nüüd tagastatud.`);
        } else {
            console.log(`Eksemplar "${this.nimetus}" ei olnud laenutatud.`);
        }
    }
}

class Hoidla {
    private eksemplarid: Eksemplar[] = [];

    lisaEksemplar(eksemplar: Eksemplar): void {
        this.eksemplarid.push(eksemplar);
        console.log(`Eksemplar "${eksemplar.nimetus}" lisati hoidlas.`);
    }

    otsiEksemplar(id: number): Eksemplar | undefined {
        return this.eksemplarid.find(eksemplar => eksemplar.id === id);
    }

    laenutaEksemplar(id: number): void {
        const eksemplar = this.otsiEksemplar(id);
        if (eksemplar) {
            eksemplar.laenuta();
        } else {
            console.log(`Eksemplari ID-ga ${id} ei leitud.`);
        }
    }

    tagastaEksemplar(id: number): void {
        const eksemplar = this.otsiEksemplar(id);
        if (eksemplar) {
            eksemplar.tagasta();
        } else {
            console.log(`Eksemplari ID-ga ${id} ei leitud.`);
        }
    }
}