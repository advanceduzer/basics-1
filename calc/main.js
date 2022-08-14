/*
let name = 'Nikolay'
let lastName = ' Malykhin'

alert(name+lastName)*/



/*let age = 123134


let name = 'lera'


let result = 1<2*/

/*
let counter = 4;
let a = counter++; // (*) меняем ++counter на counter++

alert(a); // 1*/


/*
let test1 = '2'
let test2 = 6

let test3 = +test1 + +test2

const str = false

const num = true

console.log(str / num)
*/
/*

let name = prompt('Какое официальное название JavaScript?','')
if (name == 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript')
}*/
/*
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.
    Предполагается, что пользователь вводит только числа.*/

/*
let number = prompt('Введите число?',' ')
let message = (number > 0) ? alert('1') :
    (number < 0) ? alert('-1') :
        alert('0')
*/

/*
let value = prompt('Введите число', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}*/

/*
let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}*/
/*
 result = (a + b < 4) ? 'malo' : 'mnogo'*/
/*
let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}*/
/*

let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' :
            ''*/
/*
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.*/
/*
let age
if (age !== 14 && age !== 90) {
    age = true
}*/
/*
Напишите код, который будет спрашивать логин с помощью prompt.

    Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/

/*
let userName = prompt('Ваш логин?', '')
if (userName === 'Admin') {
    let pass = prompt('Ваш пороль?', '')
    if (pass === 'Я главный') {
        alert('Здравствуйте!')
    } else if ( pass === '' || pass === null) {
        alert('Отмененно')
    } else {
        alert('Неверный пароль')
    }

} else if ( userName === '' || userName === null) {
    alert('Отменнено')

} else  {
    alert('Я вас не знаю')
}*/
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}*/
/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешали?')
}
function checkAge(age) {
    return (age > 18) ||  confirm('Родители разрешали?')
}*/

/*
function min (a,b) {
    if(a < b) {
        return a
    } else {
        return b
    }
    min(2, 5)
    min(3, -1)
    min(1, 1)
}*/

/*
function pow(x,n) {
    return x ** n
    pow(3, 2)
    pow(3, 3)
    pow(1, 100)
}*/
/*
function pow (x,n) {
    let result = x
    for(let i = 1; i<n; i++){
        result *= x
    }
    return result
}

let x = prompt('x?', '')
let n = prompt('n?', '')

if (n < 1) {
    alert(`Степерь ${n} не поддерживается`)
} else  {
    alert(pow(x,n))
}*/


/*Пример вызова такой функции calc
сalc(‘add’, 1, 2) - возвращает 3
сalc(‘multi’, 1, 2) - возвращает 2
сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо.*/

/*    function calc (a,b) {
    let result
        if( a === 1, b === 2) {
            return result = a + b
        } else if ( a === 1, b === 2) {
        return result = a * b
        } else if (a === 3 , b === 2) {
            return result = a - b
        }
        console.log(calc(1,2))


    }*/

/*
function calc(test, a, b ) {
    if (test === 'add') {
        return a + b
    } else if (test === 'multi') {
        return a * b
    } else if (test === 'subtract') {
        return a - b
    } else {
        return console.log('ошибка')
    }

}
console.log(calc('add',5,5))
console.log(calc('multi',6,6))
console.log(calc('subtract', 8,3))
console.log(calc('test2',5,2))*/


/*
Напишите if..else, соответствующий следующему switch:

    switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;

        default:
            alert( 'We hope that this page looks ok!' );
    }*/
/*let browser = prompt('Ваш браузер?', '')
if ( browser === 'Edge') {
    alert( "You've got the Edge!" )
} else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert( 'Okay we support these browsers too' )
} else {
    alert( 'We hope that this page looks ok!' )
}*/

/*
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}*/
/*
number = +prompt('Введите число от 0 до 3' , '')
switch (number) {
    case 0 :
        alert('Вы ввели число 0')
        break
    case 1 :
        alert('Вы ввели число 1')
        break
    case 2 :
    case 3 :
        alert('Вы ввели число 2, а может и 3')
        break
    default :
        alert('Вы ввели хуету какую-то')
}*/
/*
function calc(test, a, b ) {
    if (test === 'add') {
        return a + b
    } else if (test === 'multi') {
        return a * b
    } else if (test === 'subtract') {
        return a - b
    } else {
        return console.log('ошибка')
    }

}
console.log(calc('add',5,5))
console.log(calc('multi',6,6))
console.log(calc('subtract', 8,3))
console.log(calc('test2',5,2))*/


/*
 */
function calc(test,a,b) {
    switch (test) {
        case 'add' :
            console.log(a + b)
            break
        case 'multi' :
            console.log(a * b)
            break
        case 'subtract' :
            console.log(a - b)
            break
    }

}
calc('add', 5, 5)
calc('multi', 3, 2)
calc('subtract', 6, 2)