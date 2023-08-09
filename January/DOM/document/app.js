// const demo = document.getElementById("demo");
// const demo2 = document.getElementById("demo2");
const dem = document.querySelectorAll("#demo");

function myFun() {
    dem.forEach((items) => {
        items.innerHTML = 'Hello World';
    });
}