function kehaindex(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
function kehaindex2(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
//console.log(kehaindex(181, 110))
var massid = [80, 90, 100, 110];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    //console.log(kehaindex2(181, mass));
}
var index2 = massid.map(function (mass) { return kehaindex2(181, mass); });
//console.log(index2);
var vastus = [];
for (var pikkus = 150; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehaindex(pikkus, 90), kehaindex2(pikkus, 90)]);
}
console.log(vastus);
