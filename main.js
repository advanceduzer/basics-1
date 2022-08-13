function calc(operator, a, b){
    switch (operator){
        case 'add':
            return a + b;

        case 'multi':
            return a * b;

        case 'subtract':
            return a - b;

        default:
            return 'Введенная операция не существуйте, проверьте входные данные!';
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 1, 2));
console.log(calc('unknown', 1, 2));
