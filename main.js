function calc(operator, a, b) {
  switch (operator) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;
    default:
      console.log("Ошибка");
  }
}
calc("add", 3, 2);

/////////////////////////////////

for (let i = 1; i <= 19; i++) {
  console.log(i);
}

/////////////////////////////////

let i = 1;

while(i <= 19) {
  console.log(i);
  i++;
}


