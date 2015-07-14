functon createEvensArray(hightestNum) {
var evensArray =[];

for(var x =1; x < highestNum; x++) {
if(x % 2 === 0) {
    evensArray.push(x);
}
}
    return evensArray;
}

var evensArray = createEvensArray(10);
console.log(evensArray);

function addOdds(evensArray){
    
var copy = evensArray.slice(0);
    for (var x = 0; x < evensArray.length; x++) {
    copy.push(evensArray[x] + 1);
    }
    return copy;
}

var evensAndOdd = addOdds(evensArray);
console.log(evensAndOdds);