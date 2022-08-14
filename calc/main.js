let operator;
let a;
let b;
function calc (operator, a, b) {
    switch (operator){
        case '-' :
    return a - b;
    case '+' :
        return a + b;
        case '*' :
            return a * b;
    }
}

console.log(calc("-", 10, 4));
console.log(calc("+", 4, 2));
console.log(calc("*", 2, 3));