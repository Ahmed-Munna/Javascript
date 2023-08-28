


const show = document.getElementById("show");

// function display() {
//     fetch("http://127.0.0.1:5500/August/Api/facth/text.txt")
//         .then((res) => res.text())
//         .then((data) => {
//             show.innerHTML = data;
//         });
// }

async function display() {
    let fe = await fetch("http://127.0.0.1:5500/August/Api/facth/text.txt");
    let rs = await fe.text();
    
    show.innerHTML = rs;
}