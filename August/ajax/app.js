
function clickMe() {
    const xhr = new XMLHttpRequest();
    const disId = document.getElementById("main-sec");

    xhr.onload = function() {
        disId.innerHTML = xhr.responseText;
    }

    xhr.open("GET", "http://127.0.0.1:5500/August/ajax/text.txt");

    xhr.send();

}









