let firstOperand = prompt('Введите первое значение: ', 0);
let secondOperand = prompt('Введите второе значение: ', 0);
let operator = prompt('Введите оператор: ', 'add, multi, substract');

alert('Результат: '+ firstOperand + operator + secondOperand + '='+ calc());

function calc(){
    switch(operator){
        case 'add':
            return +firstOperand + +secondOperand;
        case 'multi':
            return firstOperand*secondOperand;
        case 'substract':
            return firstOperand-secondOperand;
        default:
            alert('Ошибка! Попробуйте еще раз!');
    }
}