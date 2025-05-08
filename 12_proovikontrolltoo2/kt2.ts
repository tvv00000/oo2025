/*
+   Loo klass jõe andmete hoidmiseks (nimetus, lähtme ja suudme koordinaadid).
+   Kuva jõgi joonisel koos nimetusega.
+   Koosta funktsioon lähtme ja suudme vahelise kauguse leidmiseks pikslites ning automaattest selle töö kontrolliks

+   Jõgesid võib olla mitu.
+   Lisa jõele muutjua sihtjõgi koos suhtega, millisesse sihtjõe kohta ta suubub (0 - lähe, 0.5 - keskkoht, 1 * suue).
+   Jõgede ühenduskoht  tähistatakse surema täpiga.
+   Jõgi võib olla ka sihtjõeta.
+   Kuva jõed taas joonisel.
+   Automaattestiga kontrolli, et sihtjõkke suubumiskoht arvutatakse õigesti.

Jõe kohast (nt 0.75) alates märgitakse, et tekkis reostus.
Joonista kaardill reostuse reostatud ala mööda sihtjõgesid kuni mereni välja.
Kontrolli automaattestidega, et (haru) jõgede suudmetes arvutatakse reostuse esinemine õigesti.

*/

export class River {
    name: string;
    sourceX: number;
    sourceY: number;
    mouthX: number;
    mouthY: number;
    connectionRatio: number;
    split: boolean;
    targetRiver: River | null;
    targetEnd: number;

    constructor(
        name: string,
        sourceX: number,
        sourceY: number,
        mouthX: number,
        mouthY: number,
        split: boolean = false,
        connectionRatio: number = 0,
        targetRiver: River | null = null,
        targetEnd: number = 0
    ) {
        this.name = name;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.mouthX = mouthX;
        this.mouthY = mouthY;
        this.connectionRatio = connectionRatio;
        this.split = split;
        this.targetRiver = targetRiver;
        this.targetEnd = targetEnd;
    }

    getLength(): number {
        const dx = this.mouthX - this.sourceX;
        const dy = this.mouthY - this.sourceY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    getDescription(): string {
        return `${this.name} river [START (${this.sourceX}, ${this.sourceY})] [END (${this.mouthX}, ${this.mouthY})]`;
    }

    getConnectionPoint(): { x: number; y: number } | null {
        if (this.split) {
            const dx = this.mouthX - this.sourceX;
            const dy = this.mouthY - this.sourceY;

            const connectionX = this.sourceX + this.connectionRatio * dx;
            const connectionY = this.sourceY + this.connectionRatio * dy;

            return { x: connectionX, y: connectionY };
        }
        return null;
    }

    getTargetConnectionPoint(): { x: number; y: number } | null {
        if (this.targetRiver) {
            const dx = this.targetRiver.mouthX - this.targetRiver.sourceX;
            const dy = this.targetRiver.mouthY - this.targetRiver.sourceY;

            const connectionX = this.targetRiver.sourceX + this.targetEnd * dx;
            const connectionY = this.targetRiver.sourceY + this.targetEnd * dy;

            return { x: connectionX, y: connectionY };
        }
        return null;
    }
}

const river1 = new River('River1', 0, 0, 100, 0);
const river2 = new River('River2', 0, 100, 100, 100, true, 0.25, river1, 1);

console.log(river1.getDescription());
console.log('Length of river 1:', river1.getLength());

console.log(river2.getDescription());
console.log('Length of river 2:', river2.getLength());
console.log('Connection point for river 2:', river2.getConnectionPoint());

if (river2.targetRiver) {
    console.log('Target connection river 2:', river2.getTargetConnectionPoint());
}
