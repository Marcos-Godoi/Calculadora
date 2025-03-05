var display = document.getElementById('display');
var buttonApagar = document.getElementById('buttonApagar');
// var boleano = false;
function number(button){
    display.innerText += button.innerText;
    alterarButton();
          
}  
function operacoes(opers){
    display.innerText += opers.innerText;
} 
function apagar(){
    // if (display.innerText != '') {
    //     display.innerText = ''
    // }
    if (display.innerText != '') {
       let texte = display.innerText
       display.innerText = texte.slice(0, -1)
    }
    alterarButton();
}
function alterarButton(){
    buttonApagar.innerText = display.innerText != '' ? "xx" : "AC"  
}