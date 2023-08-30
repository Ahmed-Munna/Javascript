

// function sum(num1) {

//     return function (num2) {
//         return num1 + num2;
//     }
// }

// var myFunc = sum(4);

// console.dir(myFunc(2));
// console.dir(myFunc)

// এখানে var, let কিভাবে কাজ করছে ?

for(let i = 1; i < 4; i++) {

    setTimeout(() => {
        console.log(i)
    },1000);
}

// এখানে Self-Invoking function কিভাবে কাজ করছে ?

// for(var i = 1; i < 4; i++) {

//     (function(x) {setTimeout(() => {
//         console.log(x)
//     },1000)})(i);
// }


// এখানে function কল করার আগে a = 49 কাজ করছে না কেনো ?

// let a ;

// function myFunc() {
//     a = 32;

//     var fun = function () {
//         console.log(a);
//     }
//     return setTimeout(fun,2000);
// }
// a = 49;

// myFunc();

// console.dir(myFunc)

