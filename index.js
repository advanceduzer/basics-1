
function calc(a,b,sym) {
    switch(sym){
        case "+":
            return (a + b);

        case "-":
            return (a - b);
        
        case "*":
            return (a * b);
        
        case "/":
            return (a / b);
    }
}

console.log(calc(15,3,"+"));