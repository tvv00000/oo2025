function kehaindex(cm:number, kg:number):number{
    let m:number= cm/100;
    return kg/(m*m);
}

function kehaindex2(cm:number, kg:number):number{
    let m:number= cm/100;
    return 1.3*kg/Math.pow(m, 2.5);
}

//console.log(kehaindex(181, 110))

let massid:number[]=[80, 90, 100, 110]
for(let mass of massid){
    //console.log(kehaindex2(181, mass));
}

let index2:number[]=massid.map(mass => kehaindex2(181, mass));
//console.log(index2);

let vastus:number[][]=[];
for(let pikkus=150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehaindex(pikkus, 90), kehaindex2(pikkus, 90)]);
}
console.log(vastus);