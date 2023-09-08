const todoInput = document.getElementById("todoInput"),
      addBtn = document.getElementById("addBtn"),
      notifiy = document.getElementById("notifiy"),
      taskList = document.getElementById("task-list"),
      updateBtn = document.getElementById("update-btn");

window.onload = () => {
    let list = localStorage.todoList;
    if(list) {
        taskList.innerHTML = list;
    }
}



addBtn.onclick = () => {
    if (
        todoInput.value.charAt(0) === " " || todoInput.value === ""
       ) {  
            notifiy.firstElementChild.innerHTML = "Please add valid input !";
            notifiy.style.backgroundColor = "red";
            notifiy.style.visibility = "visible";
            setTimeout(() => {
                notifiy.style.visibility = "hidden";
            }, 2000);
        } else {

            let individulTask = `<li class="li">
            <span class="todo-text">${todoInput.value}</span>
            <span class="span-button" onclick="trash(this)"><i class="fa-solid fa-trash"></i></span>
            <span class="span-button" onclick="update(this)"><i class="fa-solid fa-pen"></i></span>
            </li>`;
            
            taskList.innerHTML += individulTask;
            store();
            todoInput.value = "";
            
            notifiy.firstElementChild.innerHTML = "Item is successfully added";
            notifiy.style.visibility = "visible";
            notifiy.style.backgroundColor = "green";
            setTimeout(() => {
                notifiy.style.visibility = "hidden";
            }, 2000);
        }
}

function store() {
    localStorage.todoList = taskList.innerHTML;
}

function trash(self) {
    self.parentNode.remove();
    store();

    notifiy.firstElementChild.innerHTML = "Deleted Task";
    notifiy.style.backgroundColor = "red";
    notifiy.style.visibility = "visible";
    setTimeout(() => {
        notifiy.style.visibility = "hidden";
    }, 2000);
}

function update(self) {
    addBtn.style.display = 'none';
    updateBtn.style.display = 'block';
    todoInput.value = self.previousSibling.previousSibling.previousElementSibling.innerText;
    self.parentNode.remove();
}

updateBtn.onclick = () => {
    if (
        todoInput.value.charAt(0) === " " || todoInput.value === ""
       ) {  
            notifiy.firstElementChild.innerHTML = "Please add valid input !";
            notifiy.style.backgroundColor = "red";
            notifiy.style.visibility = "visible";
            setTimeout(() => {
                notifiy.style.visibility = "hidden";
            }, 2000);
        } else {

            let individulTask = `<li class="li">
            <span class="todo-text">${todoInput.value}</span>
            <span class="span-button" onclick="trash(this)"><i class="fa-solid fa-trash"></i></span>
            <span class="span-button" onclick="update(this)"><i class="fa-solid fa-pen"></i></span>
            </li>`;
            
            taskList.innerHTML += individulTask;
            store();
            todoInput.value = "";
            
            notifiy.firstElementChild.innerHTML = "Item is successfully Updated";
            notifiy.style.visibility = "visible";
            notifiy.style.backgroundColor = "green";
            setTimeout(() => {
                notifiy.style.visibility = "hidden";
            }, 2000);
        }
}