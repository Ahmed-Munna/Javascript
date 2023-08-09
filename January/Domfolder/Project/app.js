//Define Ui constant

const form = document.querySelector("#task-form");
const input = document.querySelector("#task");
const list = document.querySelector(".collection");

const listit = document.querySelector(".btn");
loadEventLesteners();

function loadEventLesteners(){
    listit.addEventListener("click", addAlart);
}

function addAlart(e){
    if(input.value=== ""){
        alert("Add task in Input");
    }

    const li = document.createElement("li");

    li.className("collection-item");
    li.appendChild(document.createTextNode(input.value));

    list.appendChild(li);

    e.preventDefault();
}
