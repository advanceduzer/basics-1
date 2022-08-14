function getNumber() {
  let number;
  number = prompt("Введите первое число", 2);
  return number;
}

function calc(operation, a, b) {
  let result;
  switch (operation) {
    case "add":
      result = add(a, b);
      break;
    case "sub":
      result = sub(a, b);
      break;
    case "mult":
      result = mult(a, b);
      break;
    case "div":
      result = div(a, b);
      break;
  }
  return result;
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

console.log(calc("add", getNumber(), getNumber()));
console.log(calc("sub", getNumber(), getNumber()));
console.log(calc("mult", getNumber(), getNumber()));
console.log(calc("div", getNumber(), getNumber()));
