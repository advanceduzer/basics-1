// function сalc (operation, num1, num2) {
//   let result;
//   switch(operation) {
//     case 'add':
//       result = num1 + num2;
//       break;
//     case 'multi':
//       result = num1 * num2;
//       break;
//     case 'subtract':
//       result = num1 - num2;
//       break;
//        };
//   return result;
// }

function calc(operation, num1, num2) {
    return (operation == 'add') ? num1 + num2 :
        (operation == 'multi') ? num1 * num2 :
            (operation == 'subtract') ? num1 - num2 : undefined;
}

document.writeln(`1 + 2 = ${calc('add', 1, 2)} <br>`);
document.writeln(`1 * 2 = ${calc('multi', 1, 2)} <br>`);
document.writeln(`3 - 2 = ${calc('subtract', 3, 2)} <br>`);
