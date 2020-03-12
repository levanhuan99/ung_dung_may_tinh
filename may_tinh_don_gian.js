function add() {
    let add=Number(document.getElementById("number1").value);
    let add1=Number(document.getElementById("number2").value);
    let result=(add+add1);
    document.getElementById("result").innerHTML="result addition:  "+result;
}
function sub() {
    let add=Number(document.getElementById("number1").value);
    let add1=Number(document.getElementById("number2").value);
    let result=(add-add1);
    document.getElementById("result").innerHTML="result subtraction:  "+result;
}
function mul() {

    let add = Number(document.getElementById("number1").value);
    let add1 = Number(document.getElementById("number2").value);
    let result = (add * add1);
    document.getElementById("result").innerHTML = "result multiplition:  " + result;
}

function dis() {
    let add=Number(document.getElementById("number1").value);
    let add1=Number(document.getElementById("number2").value);
    let result=(add/add1);
    document.getElementById("result").innerHTML="result division:  "+result;
}