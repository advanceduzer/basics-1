function calc (operator, a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'Error1 Один из аргументов не число';
    }   else if (isNaN(a) || isNaN(b)) {
        return 'Error2 Один из аргументов не число';
    }   else if (operator == '/' && b == 0) {
        return 'Error3 Делить на ноль нельзя';
    }   else if (operator == '%' && b == 0) {
        return 'Error4 Вычислить остаток деления от 0 нельзя';
    }

    switch (operator) {
        case '+' : return a + b;
        case '-' : return a - b;
        case '*' : return a * b;
        case '/' : return a / b;
        case '%' : return a % b;
        case '**' : return a ** b;
        default : return 'unknown operation';
}
}

console.log(calc ('-',"2",2));
console.log(calc ('-',NaN,2));
console.log(calc ('-', 2, 2));
console.log(calc ('+', 2, 2));
console.log(calc ('*', 2, 2));
console.log(calc ('/', 2, 2));
console.log(calc ('/', 2, 0));
console.log(calc ('%', 2, 0));
console.log(calc ('%', 3, 2));
console.log(calc ('**', 3, 2));