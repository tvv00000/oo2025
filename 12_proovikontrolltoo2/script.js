class River {
    constructor(name, sourceX, sourceY, mouthX, mouthY, connectionRatio = 0, split = false, targetRiver = null, targetEnd = 0) {
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

    getLength() {
        const dx = this.mouthX - this.sourceX;
        const dy = this.mouthY - this.sourceY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    getDescription() {
        return `${this.name} river [START ${this.sourceX}, ${this.sourceY}] [END ${this.mouthX}, ${this.mouthY}]`;
    }

    getConnectionPoint() {
        if (this.split) {
            const dx = this.mouthX - this.sourceX;
            const dy = this.mouthY - this.sourceY;

            const connectionX = this.sourceX + this.connectionRatio * dx;
            const connectionY = this.sourceY + this.connectionRatio * dy;
            
            return { x: connectionX, y: connectionY };
        }
        return null;
    }

    getTargetConnectionPoint() {
        if (this.targetRiver) {
            const dx = this.targetRiver.mouthX - this.targetRiver.sourceX;
            const dy = this.targetRiver.mouthY - this.targetRiver.sourceY;

            const targetConnectionX = this.targetRiver.sourceX + this.targetEnd * dx;
            const targetConnectionY = this.targetRiver.sourceY + this.targetEnd * dy;

            return { x: targetConnectionX, y: targetConnectionY };
        }
        return null;
    }

    Pollution(pollutionStartRatio = null) {
        this.pollutedWater = [];
    
        let startRatio;
        if (pollutionStartRatio !== null) {
            startRatio = pollutionStartRatio;
        } else {
            startRatio = this.connectionRatio;
        }
    
        const startX = this.sourceX + startRatio * (this.mouthX - this.sourceX);
        const startY = this.sourceY + startRatio * (this.mouthY - this.sourceY);
    
        this.pollutedWater.push({
            from: { x: startX, y: startY },
            to: { x: this.mouthX, y: this.mouthY }
        });
    
        if (this.targetRiver) {
            this.targetRiver.Pollution(this.targetEnd);
        }
    }

    drawPollution(canvas) {
        if (!this.pollutedWater) return;

        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 6;

        for (const asi of this.pollutedWater) {
            ctx.beginPath();
            ctx.moveTo(asi.from.x, asi.from.y);
            ctx.lineTo(asi.to.x, asi.to.y);
            ctx.stroke();
        }
    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        const length = this.getLength();

        ctx.beginPath();
        ctx.moveTo(this.sourceX, this.sourceY);
        ctx.lineTo(this.mouthX, this.mouthY);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('[START](' + this.sourceX + ":" + this.sourceY + ')', this.sourceX, this.sourceY);
        ctx.fillText(this.name + ' (' + length.toFixed(2) + ' units)', (this.sourceX + this.mouthX) / 2, (this.sourceY + this.mouthY) / 2);
        ctx.fillText('[END]' + this.mouthX + ":" + this.mouthY + ')', this.mouthX, this.mouthY);

        if (this.split) {
            const connectionPoint = this.getConnectionPoint();
            if (connectionPoint) {
                ctx.beginPath();
                ctx.arc(connectionPoint.x, connectionPoint.y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.fillText('Connection Point (' + connectionPoint.x + ':' + connectionPoint.y + ') [' + this.connectionRatio + ']', connectionPoint.x, connectionPoint.y);

                const targetConnectionPoint = this.getTargetConnectionPoint();
                if (targetConnectionPoint) {
                    ctx.beginPath();
                    ctx.moveTo(connectionPoint.x, connectionPoint.y);
                    ctx.lineTo(targetConnectionPoint.x, targetConnectionPoint.y);
                    ctx.strokeStyle = 'purple';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }
        }
    }
}

window.onload = function() {
    const canvas = document.getElementById('riverCanvas');

    const river3 = new River('River3', 550, 650, 700, 400);
    const river1 = new River('River1', 0, 50, 800, 100, 0.8, true, river3, 0.5);
    const river2 = new River('River2', 0, 150, 600, 200, 0.25, true, river1, 0.75);
    const river4 = new River('River4', 0, 350, 400, 300, 0.1, true, river2, 0.1);
    
    
    river1.draw(canvas);
    river2.draw(canvas);
    river3.draw(canvas);
    river4.draw(canvas)
    
    river2.Pollution(0);


    river1.drawPollution(canvas);
    river2.drawPollution(canvas);
    river3.drawPollution(canvas);
    river4.drawPollution(canvas);

};
