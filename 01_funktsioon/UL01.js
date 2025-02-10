function hoius(algsumma, intress, aastat) {
    var raha = algsumma;
    var ajalugu = [{ raha: raha }];
    for (var aasta = 1; aasta <= aastat; aasta++) {
        raha *= intress;
        ajalugu.push({ raha: parseFloat(raha.toFixed(2)) });
    }
    return ajalugu;
}
var investeerimisData = hoius(100, 1.0225, 10); // algsumma, intress 1.0225 = 2,25%, mitu aastat
console.table(investeerimisData);
