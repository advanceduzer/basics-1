function сalc( operator, firstValue = 0 , secondValue = 0){
  let result = 0;

  switch (operator) {
    case 'multi':
      result = firstValue * secondValue;
      break;
    case 'add':
      result = firstValue + secondValue ;
      break;
    case 'subtract':
      result = firstValue - secondValue;
      break;
    default:
      result = "operator not found" ;
  }

  return result
}

console.log(сalc('add', 4, 4))
console.log(сalc('multi', 14, 2) )
console.log(сalc('subtract', 15, 12) )
console.log(сalc('subtrac79t', 3, 2) )
