function hoius(algsumma: number, intress: number, aastat: number): {raha: number}[] {
    let raha = algsumma;
    let ajalugu: {raha: number}[] = [{raha}];
    
    for (let aasta = 1; aasta <= aastat; aasta++) {
        raha *= intress;
        ajalugu.push({raha: parseFloat(raha.toFixed(2))});
    }
    
    return ajalugu;
}

const investeerimisData = hoius(100, 1.0225, 10); // algsumma, intress 1.0225 = 2,25%, mitu aastat
console.table(investeerimisData);