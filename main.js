function checkInput(firstNumber,secondNumber) {
    let checkInput = (typeof firstNumber !== 'number' || typeof secondNumber !== 'number')
    if (checkInput) {
        return true;
    }
}

function calc(operation, firstNumber, secondNumber) {
    if ( checkInput(firstNumber,secondNumber) ) return "Is not number";

    let result;
    const add = 'add';
    const multi = 'multi';
    const subtract = 'subtract';

    if (operation === add) {
        return result = firstNumber + secondNumber;
    } else if (operation === multi) {
        return result = firstNumber * secondNumber;
    } else if (operation === subtract){
        return result = firstNumber - secondNumber;
    } else {
        return "unknown operation";
    }
}

console.log("------ Несколько условий: « if else » ------")
console.log(calc('add',1,2));
console.log(calc('multi',1,2));
console.log(calc('subtract',3,2));




function calcSwitch(operation, firstNumber, secondNumber) {

    if ( checkInput(firstNumber,secondNumber) ) return "Is not number";

    let result;
    const add = 'add';
    const multi = 'multi';
    const subtract = 'subtract';

    switch (operation) {
        case (add):
            return result = firstNumber + secondNumber;
        case (multi):
            return result = firstNumber * secondNumber;
        case (subtract):
            return result = firstNumber - secondNumber;
        default:
            return "unknown operation";
    }
}

console.log("------ Конструкция switch ------")
console.log( calcSwitch('add',1,2) );
console.log( calcSwitch('multi',1,2) );
console.log( calcSwitch('subtract',3,2) );