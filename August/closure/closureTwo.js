
const btn = document.getElementById("btn");

function myFunc() {
    var count = 0;
    
    return function () {
        count += 1
        return count;
    }
}

let func = myFunc();
// btn.onclick = func;

function ourFunc() {
    btn.innerHTML = "Count " + func();
}