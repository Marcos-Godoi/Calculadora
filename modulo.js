var display = document.getElementById('display');
var buttonApagar = document.getElementById('buttonApagar');
var calc = document.getElementById('operadores');
var virgula
// var boleano = false;
var digitosUser
function number(button) {
    // display.innerText += button.innerText;
    // console.log(display.innerText)
    $boTemVirgula = false;
    if (button.innerText === ",") {
       if (button.innerText == ","){
        $boTemVirgula = true;
       }
    }
    if (!$boTemVirgula) {
        display.innerText += button.innerText;
    }
    if (button.innerText == '+'|| button.innerText == '-' ||  button.innerText == '/' ||  button.innerText == 'x'  || button.innerText == '%'){
        $boTemVirgula = false;
    
        alterarButton();
    }
}

function operacoes(opers) {
    display.innerText += opers.innerText;
}
function apagar() {
    if (display.innerText != '') {
        let texte = display.innerText
        display.innerText = texte.slice(0, -1)
    
        
    }
    if (buttonIgual = onclick) {
        display.innerText != '' 
        display.innerText = ''
        alterarButton();
        
    }
    
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
    console.log(Number)
    Number = Number.replace(/,/g,".")
    console.log(Number)
    let array = Number.split(/(\d+[\.,]?\d*|\+\/\-|[x\-\+\%\*\/])/)
    let filteredArray = array.filter(item => item !== "")
    console.log(filteredArray)
    let resultado = parseFloat(filteredArray[0])
    let boDivisao0 = true
    for (let i = 1; i < filteredArray.length; i +=2) {
        let number = parseFloat(filteredArray[i+1])
        switch (filteredArray[i]) {
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
            case "%":

                resultado = (array[0]/100) * array[2]
    
                break;
            case "+/-":
                resultado *= (-1)
    
                break;

            default:
                console.log("nao implementado")
                break;
        }

    }
    resultado = resultado.toString()
    resultado = resultado.replace(".",",")
    display.innerText = boDivisao0?resultado:"Indefinido"
}