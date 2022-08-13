let a = +prompt('Введите первое число');
let b = +prompt("Введите второе число");
let id = prompt('Введите математическое действие: +, -, *');


switch (id) {
	case "+":
		alert(a + b);
		break;
	case "-":
		alert(a - b);
		break;
	case "*":
		alert(a * b);
		break;
}

