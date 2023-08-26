
// const element = document.getElementById("btn");
// element.addEventListener('click', myFunc);
// const inp = document.getElementById("inp");
// function myFunc() {
//     inp.setAttribute('placeholder', "some text");
// }


const btnElement = document.getElementById("btn").addEventListener('click', myFunc);

const inpElement = document.getElementById("inp");
const mainTable = document.getElementById("mainTable");

function myFunc() {
    let val = inpElement.value;
    let additem = `<tr><td>${val}</td><td><button onClick = "delFunc(this)">Delete</button></td></tr>`;
    mainTable.innerHTML += additem;
    inpElement.value = '';
}

function delFunc(thi) {
    thi.parentElement.parentElement.remove();
}


