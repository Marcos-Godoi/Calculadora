var display = document.getElementById('display');
var buttonApagar = document.getElementById('buttonApagar');
var calc = document.getElementById('operadores');
// var boleano = false;
var digitosUser;
let TemVirgula = false;
var statusButton = false;
function number(button) {
    if(button.innerText == ',' && display.innerText.endsWith(',')){
        return
    }
    statusButton = false;
    display.innerText += button.innerText
    alterarButton()
}

function operacoes(opers) {
    display.innerText += opers.innerText;
}
function apagar(button) {
        if (statusButton) {
            display.innerText = '';
        }
        if (display.innerText !== '' && !statusButton) {
            let texte = display.innerText;
            display.innerText = texte.slice(0, -1);
            alterarButton();
        }
}
function alterarButton() {
    buttonApagar.innerText = display.innerText != '' ? "xx" : "AC"
}
function convert(number) {
    digitosUser = Number.parseInt(displayinnerText)
}


function operacoes() {
    let Number = display.innerText
    Number = Number.replace(/,/g,".")
    let array = Number.split(/(\d+[\.,]?\d*|\+\/\-|[x\-\+\%\*\/])/)
    let filteredArray = array.filter(item => item !== "")
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
    statusButton = true;
    buttonApagar.innerText = "AC"
    resultado = resultado.toString()
    resultado = resultado.replace(".",",")
    display.innerText = boDivisao0?resultado:"Indefinido"
}