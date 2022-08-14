function calc(first, second, operand) {
    switch(operand) {
        case "add":
            return(+first + +second);
        case "multi":
            return(+first * +second);
        case "subtract":
            return(+first - +second);
        default:
            return("что-то я вас не понимаю");
    }
}

let first = prompt("Введите первое число", "0");
let second = prompt("Введите второе число", 0);
let operand = prompt("Введите +(add), -(subtract), *(multi)", "add");

alert(calc(first, second, operand));