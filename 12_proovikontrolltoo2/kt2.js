"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.River = void 0;
var River = /** @class */ (function () {
    function River(name, sourceX, sourceY, mouthX, mouthY, split, connectionRatio, targetRiver, targetEnd) {
        if (split === void 0) { split = false; }
        if (connectionRatio === void 0) { connectionRatio = 0; }
        if (targetRiver === void 0) { targetRiver = null; }
        if (targetEnd === void 0) { targetEnd = 0; }
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
    River.prototype.getLength = function () {
        var dx = this.mouthX - this.sourceX;
        var dy = this.mouthY - this.sourceY;
        return Math.sqrt(dx * dx + dy * dy);
    };
    River.prototype.getDescription = function () {
        return "".concat(this.name, " river [START (").concat(this.sourceX, ", ").concat(this.sourceY, ")] [END (").concat(this.mouthX, ", ").concat(this.mouthY, ")]");
    };
    River.prototype.getConnectionPoint = function () {
        if (this.split) {
            var dx = this.mouthX - this.sourceX;
            var dy = this.mouthY - this.sourceY;
            var connectionX = this.sourceX + this.connectionRatio * dx;
            var connectionY = this.sourceY + this.connectionRatio * dy;
            return { x: connectionX, y: connectionY };
        }
        return null;
    };
    River.prototype.getTargetConnectionPoint = function () {
        if (this.targetRiver) {
            var dx = this.targetRiver.mouthX - this.targetRiver.sourceX;
            var dy = this.targetRiver.mouthY - this.targetRiver.sourceY;
            var connectionX = this.targetRiver.sourceX + this.targetEnd * dx;
            var connectionY = this.targetRiver.sourceY + this.targetEnd * dy;
            return { x: connectionX, y: connectionY };
        }
        return null;
    };
    return River;
}());
exports.River = River;
var river1 = new River('River1', 0, 0, 100, 0);
var river2 = new River('River2', 0, 100, 100, 100, true, 0.25, river1, 1);
console.log(river1.getDescription());
console.log('Length of river 1:', river1.getLength());
console.log(river2.getDescription());
console.log('Length of river 2:', river2.getLength());
console.log('Connection point for river 2:', river2.getConnectionPoint());
if (river2.targetRiver) {
    console.log('Target connection point for river 2:', river2.getTargetConnectionPoint());
}
