var readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question('Please enter your first number: '));

var num2 = parseInt(readlineSync.question('Please enter your second number: '));

var operationToPerform = (readlineSync.question('Please choose an operation to perform: Add, Subtract, Multiply, Divide ').toLowerCase());
console.log(operationToPerform);


var addNum = function (numberToAdd1, numberToAdd2) {
    return (num1 + num2);
};


var multiplyNum = function (numberToAdd1, numberToAdd2) {
    return (num1 * num2);
};


var divideNum = function (numberToAdd1, numberToAdd2) {
    return (num1 / num2);
};


var subtractNum = function (numberToAdd1, numberToAdd2) {
    return (num1 - num2);
};


if (operationToPerform === 'add') {

    console.log(addNum());

} else if (operationToPerform === 'subtract') {

    console.log(subtractNum());

} else if (operationToPerform === 'multiply') {

    console.log(multiplyNum());

} else if (operationToPerform === 'divide') {

    console.log(divideNum());

} else {

    console.log('Please choose correct operation');
}