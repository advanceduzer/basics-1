console.log('Hello World!');

function calk(operator, a, b) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number') || (operator === '');

    if(isNotValid) {
        return 'Error' ;
    } else if(operator === 'add') {
        return a + b;
    } else if(operator === 'sub') {
        return a - b;
    } else if(operator === 'multy') {
        return a * b;
    } else if(operator === 'div') {
        return a / b;
    }
}

console.log(calk('add', 33, 4));

function Calk(operator, a, b) {
    switch (operator) {
        case 'add':
            return a + b;
            break;
        case 'multy':
            return a * b;
            break;
        case 'div':
            return a - b;
            break;
    }
}

console.log(Calk('div', 15, 4));