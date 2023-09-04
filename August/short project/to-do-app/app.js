const todoInput = document.getElementById("todoInput"),
      addBtn = document.getElementById("addBtn"),
      notifiy = document.getElementById("notifiy");

addBtn.onclick = () => {
    if (
        todoInput.value.charAt(0) === " " || todoInput.value === ""
       ) {  
            notifiy.firstElementChild.innerHTML = "Please add valid input !";
            notifiy.style.visibility = "visible";
            setTimeout(() => {
                notifiy.style.visibility = "hidden";
            }, 2000);
        }
}
