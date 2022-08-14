function Calculator (operator, num1, num2) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        default:
            console.log('Оператор не задан');
            break;
    }
}

Calculator('+', 145, 78);
Calculator('-', 581, 37);
Calculator('*', 155, 14);
Calculator('/', 15, 4);