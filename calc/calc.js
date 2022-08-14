bpvtytybz1;
function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}

function Calc(operation = "add", a, b) {
  const isNumber = !isNaN(a) && !isNaN(b) ? true : false;

  if (isNumber) {
    switch (operation) {
      case "add":
        return add(a, b);
      case "multi":
        return multi(a, b);
      case "subtract":
        return subtract(a, b);
      default:
        return "Операция не определена";
    }
  } else {
    return "Ошибка в аргументе";
  }
}

console.log(Calc("multi", 5, 3));
