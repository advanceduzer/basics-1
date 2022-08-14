function calc( operator, num1, num2 ) {
    if (operator == 'add'){
        return console.log( num1 + num2);
    } else if ( operator == 'multi'){
        return console.log( num1 * num2);
    } else if ( operator == 'subtract'){
        return console.log( num1 - num2)
    }
}

calc( 'add', 1, 2 );
calc( 'multi', 1, 2);
calc( 'subtract', 3,2);