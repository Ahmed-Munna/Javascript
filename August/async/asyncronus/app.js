// const myObj = {
//     name: "ahmed Munna",
//     age: 39,
//     activite: function() {

//         setTimeout(() => {
//             console.log(this.name);
//         },2000)
//     }
// }

// console.log(myObj.activite());

// console.log("hello");

// setTimeout(function() {
//     console.log("hello Bangladesh");
// },1000)

// for (let i = 0; i < 1000; i++) {
//     console.log("hello World");
// }

let payment = true;
let marks = 20;

function enroll(callback) {
    console.log("Enrollment in progress...");

    setTimeout(function() {
        if (payment) {
            callback();
        } else {
            console.log("Payment Faild");
        }
    },2000);
}

function progress(callback) {
    console.log("Course in progress...");

    setTimeout(function() {
        if (marks >= 70) {
            callback();
        } else {
            console.log("You could not get enough marks");
        }
    },3000);
}

function getCirtificate() {
    console.log("Cirtificate in progress...");

    setTimeout(function() {
        console.log("Congratulaition.....");
    },1000);
}

enroll(function() {
    progress(getCirtificate);
});


