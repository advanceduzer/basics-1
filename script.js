let operator = prompt(`Введите один из операторов: "add", "multi", "subtract", "div", "exp"`);
let first = parseInt(prompt("Введите первое число"));
let second = parseInt(prompt("Введите второе число"));

// function calc() {
//   if (operator === "add") return console.log(first + second);
//   if (operator === "multi") return console.log(first * second);
//   if (operator === "subtract") return console.log(first - second);
//   if (operator === "div") return console.log(Math.round(first / second));
//   if (operator === "exp") return console.log(first ** second);
//   return console.log("Действие не найдено!");
// }

function calc() {
    switch (operator) {
      case "add":
        return alert(first + second);
      case "multi":
        return alert(first * second);
      case "subtract":
        return alert(first - second);
      case "div":
        return alert(Math.round(first / second));
      case "exp":
        return alert(first ** second);
      default:
        return alert("Действие не найдено!");
    }
  }

calc();