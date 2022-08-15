function calc(operator,a,b) {
   switch (operator) {
    case '+': 
      return a+b;
      break;
    case '-':
      return a-b;
      break;
    case '*':
      return a*b;
      break;
    default:
        console.log ('А где деление?');
}
}
console.log (calc ('+',12,9));
console.log (calc ('-',12,9));
console.log (calc ('*',12,9));
console.log(calc('asdjsakd', 5, 5));