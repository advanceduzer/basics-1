function calc (a,b,action) {
    if (a != Number(a) || b != Number(b)){
        return('неккоректные данные');
    }else if (action == 'add'){
        return (a+b);
    }else if (action == 'multi'){
        return(a*b);
    }else if (action == 'subtract'){
        return(a-b);
    }
   
}

console.log (calc(5,3, 'add'))
console.log (calc(5,3, 'multi'))
console.log (calc(5,3, 'subtract'))


function calc (a,b,action){

    switch (action) {
        case ('add') :
            return (a+b);
        
        case ('multi'):
            return (a*b);
        
        case ('subtract'):
            return (a-b)
            
        default:
            return ('incorrect data')           
        }
    }
    console.log (calc(5,2,'add'))
    console.log (calc(5,2,'multi'))
    console.log (calc(5,2,'subtract'))
