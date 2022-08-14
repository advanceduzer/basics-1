function calc (a, action, b) {
    switch(action) {
        case '+': return (a + b); 
        case '-': return (a - b); 
        case '*': return (a * b); 
        default:  return ('некорректный оператор');
    }
}
console.log(calc (1000, '-', 7));