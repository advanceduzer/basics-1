let a = prompt('введите первое число', '0');
let b = prompt('введите второе число', '0');
let operation = prompt('введите один из операторов: +, -, *', '+');

function calc(operation, numbOne, numbTwo) {
	let checkOnSpaces = numbOne === ' ' || numbTwo === ' ';
	let notNumber = numbOne === '' || isNaN(numbOne) || numbTwo === '' || isNaN(numbTwo);
	let operationIsCorrect = operation === '+' || operation === '-' || operation === '*';

	if (checkOnSpaces || notNumber) return 'чтоб программа корректно работало введите числа';
	else if (!operationIsCorrect) return 'введите правельный оператор';
	else {
		switch (operation) {
			case '+':
				return +numbOne + +numbTwo;
			case '-':
				return +numbOne - +numbTwo;
			case '*':
				return +numbOne * +numbTwo;
			default:
				return 'произошла ошыбка';
		}
	}
}

console.log(calc(operation, a, b));
