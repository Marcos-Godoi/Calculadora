var display = document.getElementById('display');
var buttonApagar = document.getElementById('buttonApagar');
let calc = document.getElementById('operadores');
// var boleano = false;
var digitosUser
function number(button) {
    display.innerText += button.innerText;
    alterarButton();

}
function operacoes(opers) {
    display.innerText += opers.innerText;
}
function apagar() {
    if (display.innerText != '') {
        let texte = display.innerText
        display.innerText = texte.slice(0, -1)
    }
    // if (display.innerText != '') {
    //     display.innerText = ''
    // }
    alterarButton();
}
function alterarButton() {
    buttonApagar.innerText = display.innerText != '' ? "xx" : "AC"
}
function convert(number) {
    digitosUser = Number.parseInt(displayinnerText)
}


function operacoes() {
    let Number = display.innerText
    let array = Number.split(/([x+\-/])/)
    let resultado = parseFloat(array[0])
    let boDivisao0 = true
    console.log(array)
    for (let i = 1; i < array.length; i +=2) {
        let number = parseFloat(array[i+1])
        switch (array[i]) {
            case "+":
                resultado += number
                
                break;
            case "-":
                resultado -= number

                break;
            case "/":
                if (number != 0) {
                    resultado /= number  
                }
                if (number == 0){
                    boDivisao0 = false
                }

                break;
            case "x":
                resultado *= number

                break;

            default:
                console.log("nao implementado")
                break;
        }

    }
    console.log(resultado)
    display.innerText = boDivisao0?resultado:"Indefinido"
}