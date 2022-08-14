function calculate (math, a ,b) {
   
   switch (math) {
      case ('+'):
         return  a + b ;
         break;
      case ('-'):
         return  a - b ;
         break;
      case ('*'):
         return  a * b ;
   }
}

console.log(calculate ('+', 12, 15))
console.log(calculate ('-', 121, 105))
console.log(calculate ('*', 11, 12))