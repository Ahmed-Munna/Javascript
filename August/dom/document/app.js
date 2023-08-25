const formElement = document.forms["myForm"];
const alertId = document.getElementById('alert');
function validForm() {
    let pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let fval = formElement['text'].value;
    if (!pattern.test(fval)) {
        alertId.style = "display: block; color: red";
        formElement['text'].style = "border: 1px solid red";
        console.log(alertId)
        return false;
    }
}


