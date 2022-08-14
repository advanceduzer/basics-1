let a = prompt('введите первое число', '0');
let b = prompt('введите второе число', '0');
let operation = prompt('введите один из операторов: add, multi, substract', 'add');

function validateValues(operation, numbOne, numbTwo) {
	let checkOnSpaces = numbOne === ' ' || numbTwo === ' ';
	let notNumber = numbOne === '' || isNaN(numbOne) || numbTwo === '' || isNaN(numbTwo);
	let operationIsCorrect = operation === 'add' || operation === 'multi' || operation === 'substract';

	if (checkOnSpaces || notNumber) return 'чтоб программа корректно работало введите числа';
	else if (!operationIsCorrect) return 'введите правельный оператор';
	else return 'валидация пройдена';
}

function calc(operation, numbOne, numbTwo) {
	if (validateValues(operation, numbOne, numbTwo) === 'валидация пройдена') {
		switch (operation) {
			case 'add':
				return Number(numbOne) + Number(numbTwo);
			case 'substract':
				return Number(numbOne) - Number(numbTwo);
			case 'multi':
				return Number(numbOne) * Number(numbTwo);
			default:
				return 'произошла ошыбка';
		}
	} else {
		return validateValues(operation, numbOne, numbTwo);
	}
}

console.log(calc(operation, a, b));
