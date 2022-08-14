function calc(action, firstOperand, secondOperand) {
  if (checkOperand(firstOperand) && checkOperand(secondOperand)) {
    switch (action) {
      case "add":
        return firstOperand + secondOperand;
      case "sub":
        return firstOperand - secondOperand;
      case "multi":
        return firstOperand * secondOperand;
      default:
        return "Incorrect action";
    }
  }

  return "Incorrect operands";
}

function checkOperand(operand) {
  return typeof operand === "number";
}

console.log(calc("add", 200, 500));
console.log(calc("multi", 20, 50));
console.log(calc("sub", 2000, 500));
console.log(calc("123", 2, 3));
console.log(calc("add", 5, "hello"));
