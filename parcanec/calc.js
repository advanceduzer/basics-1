let deistvie = prompt("Vvedite nujnoe deistie (+, -, *)", "")
let pervoe = Number(prompt("Pervoe 4islo", ""))
let vtoroe = Number(prompt("Vtoroe 4islo", ""))
let resultat
function calcSumm(pervoe, vtoroe) {
        const resultat = (pervoe + vtoroe)
        return resultat
    }
function calcRazn(pervoe, vtoroe) {
        const resultat = (pervoe - vtoroe)
        return resultat
    }
function calcMult(pervoe, vtoroe) {
        const resultat = (pervoe * vtoroe)
        return resultat
    }
/* if (deistvie === "+") {
    resultat = calcSumm(pervoe, vtoroe)
} else if (deistvie === "-") {
    resultat = calcRazn(pervoe, vtoroe)
} else if (deistvie === "*") {
    resultat = calcMult(pervoe, vtoroe)
} else {
    resultat = "Вы ввели недопустимое значение"
} */
switch (deistvie) {
    case "+": resultat = calcSumm(pervoe, vtoroe)
    break
    case "-": resultat = calcRazn(pervoe, vtoroe)
    break
    case "*": resultat = calcMult(pervoe, vtoroe)
    break
    default: resultat = "Вы ввели недопустимое значение"
}
alert (resultat)