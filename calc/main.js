function makeCalculation(operator, num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {return console.log('Ошибка, используйте только числовые значения')};
    switch (operator) {
        case 'add':
            console.log(num1 + num2);
            break;
        case 'subtract':
            console.log(num1 - num2);
            break;
        case 'multi':
            console.log(num1 * num2);
            break;
        default:
            console.log("Ошибка, введите 'add' для сложения, 'subtract' для вычитания, 'multi' для умножения")
            break;
    }
};


makeCalculation('add', 4, 7);
makeCalculation('multi', 4, 7);
makeCalculation('subtract', 4, 7);
makeCalculation('divide', 4, 7);
makeCalculation('add', 'qweq', 8);
makeCalculation('add', 2, 'tutu');